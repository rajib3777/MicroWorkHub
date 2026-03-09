import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
    Clock, CheckCircle, ShieldCheck, DollarSign,
    ArrowLeft, User, MessageCircle, AlertCircle, Info, Send
} from 'lucide-react';
import { featuredJobs } from '../data/mockData';

const JobDetails = () => {
    // In a real app we'd use useParams().id to fetch. Using mock for now.
    const job = featuredJobs[0];

    return (
        <div className="pt-32 pb-20 min-h-screen bg-[#f8fafc]">
            <div className="container-custom">
                <Link to="/jobs" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-600 font-bold mb-8 transition-colors">
                    <ArrowLeft size={20} /> Back to All Jobs
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Detail Side */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="glass-card bg-white p-10 rounded-[2.5rem] border border-slate-100">
                            <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                                <div className="space-y-2">
                                    <div className="bg-brand-50 text-brand-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest inline-block">
                                        {job.category}
                                    </div>
                                    <h1 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight">{job.title}</h1>
                                    <div className="flex items-center gap-4 text-sm font-bold text-slate-400">
                                        <span className="flex items-center gap-1.5"><User size={16} /> Posted by {job.poster}</span>
                                        <span className="flex items-center gap-1.5"><Clock size={16} /> Time: {job.time}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Worker Reward</p>
                                    <h2 className="text-4xl font-black text-emerald-600 tracking-tight">{job.price}</h2>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                    <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                                        <Info size={20} className="text-brand-600" /> Task Overview
                                    </h3>
                                    <p className="text-slate-600 font-medium leading-relaxed">{job.description}</p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                                        <CheckCircle size={20} className="text-emerald-500" /> Requirements for Proof
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            'Screenshot of the app icon on your home screen.',
                                            'Registration email confirmation number.',
                                            '50-word review content screenshot from the Play Store/App Store.',
                                            'User ID used during registration.'
                                        ].map((step, i) => (
                                            <li key={i} className="flex gap-3 text-slate-600 font-medium bg-white p-4 rounded-xl border border-slate-50 shadow-sm">
                                                <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-black">{i + 1}</span>
                                                {step}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Submission Form (Locked until job accepted) */}
                        <div className="glass-card bg-white p-10 rounded-[2.5rem] border border-slate-100 relative overflow-hidden">
                            <div className="absolute inset-0 bg-slate-900/5 backdrop-blur-[2px] z-10 flex items-center justify-center">
                                <div className="bg-white p-8 rounded-3xl shadow-premium text-center space-y-4 max-w-sm mx-6 border border-slate-100 animate-in zoom-in duration-300">
                                    <ShieldCheck size={48} className="mx-auto text-brand-600" />
                                    <h4 className="text-xl font-black text-slate-900">Accept Task to Start</h4>
                                    <p className="text-sm font-medium text-slate-500 leading-relaxed">You must accept this task before you can submit any work. Once accepted, you'll have 2 hours to complete it.</p>
                                    <button className="btn-primary w-full">Accept This Task</button>
                                </div>
                            </div>

                            <div className="space-y-6 opacity-30 select-none">
                                <h3 className="text-xl font-black text-slate-900">Submit Your Proof</h3>
                                <div>
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 block">Text Proof (Mandatory)</label>
                                    <textarea rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 outline-none" placeholder="Provide requested text info..."></textarea>
                                </div>
                                <div>
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 block">Upload Screenshot</label>
                                    <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center text-slate-400">
                                        Click or drag file to upload
                                    </div>
                                </div>
                                <button className="btn-primary w-full opacity-50 cursor-not-allowed">Submit Task Proof</button>
                            </div>
                        </div>
                    </div>

                    {/* Right Info Sidebar */}
                    <div className="space-y-8">
                        <div className="glass-card bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-premium">
                            <h3 className="text-lg font-black mb-6 border-b border-white/10 pb-4">Job Security</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm">Escrow Protected</h4>
                                        <p className="text-xs text-slate-400 font-medium">Funds for this job are already deposited by the employer.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                                        <MessageCircle size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm">Dispute Support</h4>
                                        <p className="text-xs text-slate-400 font-medium">Unfair rejection? Our admins are here to resolve it.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm">Instant Approval</h4>
                                        <p className="text-xs text-slate-400 font-medium">Employer usually approves proofs within 12 hours.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                            <h3 className="text-lg font-black text-slate-900 mb-6">About Employer</h3>
                            <div className="flex items-center gap-4 mb-6">
                                <img src="https://i.pravatar.cc/150?img=11" className="w-14 h-14 rounded-2xl" alt="Employer" />
                                <div>
                                    <h4 className="font-black text-slate-900">{job.poster}</h4>
                                    <p className="text-xs font-bold text-brand-600 uppercase tracking-widest">Premium Entity</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-slate-50 rounded-2xl text-center">
                                    <p className="text-[10px] font-black text-slate-400 uppercase">Jobs Posted</p>
                                    <p className="text-lg font-black text-slate-900">450</p>
                                </div>
                                <div className="p-3 bg-slate-50 rounded-2xl text-center">
                                    <p className="text-[10px] font-black text-slate-400 uppercase">Approval %</p>
                                    <p className="text-lg font-black text-slate-900">98%</p>
                                </div>
                            </div>
                            <button className="w-full mt-6 btn-outline py-2.5 text-sm flex items-center justify-center gap-2">
                                <AlertCircle size={16} /> Report Job
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
