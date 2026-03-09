import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CreditCard, ShieldCheck, DollarSign, UploadCloud } from 'lucide-react';

const PostJob = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [workers, setWorkers] = useState('');

    const calcTotal = () => {
        const cost = (parseFloat(price) || 0) * (parseInt(workers) || 0);
        const fee = cost * 0.1; // 10% platform fee
        return (cost + fee).toFixed(2);
    };

    return (
        <div className="pt-32 pb-20 min-h-screen bg-[#f8fafc]">
            <div className="container-custom max-w-4xl">
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl lg:text-5xl font-black text-slate-900">Post a <span className="text-brand-600">Task</span>.</h1>
                    <p className="text-lg text-slate-500 font-medium">Create a job, deposit funds into escrow, and let workers do the rest safely.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="glass-card bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-black mb-6 border-b border-slate-100 pb-4">Task Details</h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-xs font-black text-slate-700 uppercase tracking-widest mb-2 block">Job Title</label>
                                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Download App and Review" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none font-medium" />
                                </div>
                                <div>
                                    <label className="text-xs font-black text-slate-700 uppercase tracking-widest mb-2 block">Instructions</label>
                                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="4" placeholder="Step 1: Go to link. Step 2: Download..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none font-medium"></textarea>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-black text-slate-700 uppercase tracking-widest mb-2 block">Reward per Worker (৳)</label>
                                        <div className="relative">
                                            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="0.00" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none font-medium" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-xs font-black text-slate-700 uppercase tracking-widest mb-2 block">Workers Needed</label>
                                        <div className="relative">
                                            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                            <input type="number" value={workers} onChange={(e) => setWorkers(e.target.value)} placeholder="0" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none font-medium" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="glass-card bg-slate-900 text-white p-8 rounded-3xl shadow-premium sticky top-32">
                            <h3 className="text-xl font-black mb-6 border-b border-white/10 pb-4">Escrow Summary</h3>

                            <div className="space-y-4 mb-8 text-sm font-medium">
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Worker Cost</span>
                                    <span>৳ {((parseFloat(price) || 0) * (parseInt(workers) || 0)).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Platform Fee (10%)</span>
                                    <span>৳ {((parseFloat(price) || 0) * (parseInt(workers) || 0) * 0.1).toFixed(2)}</span>
                                </div>
                                <div className="border-t border-white/10 pt-4 flex justify-between font-black text-lg">
                                    <span className="text-cyan-400">Total Deposit</span>
                                    <span>৳ {calcTotal()}</span>
                                </div>
                            </div>

                            <button className="w-full btn-escrow flex items-center justify-center gap-2 mb-4">
                                <CreditCard size={18} /> Pay via bKash/Bank
                            </button>

                            <div className="flex items-start gap-3 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400">
                                <ShieldCheck size={20} className="shrink-0" />
                                <p className="text-xs font-bold leading-relaxed">Funds are held securely in Escrow. They are only released when you approve the submitted proof.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostJob;
