import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Clock, CheckCircle, ArrowRight, DollarSign } from 'lucide-react';
import { featuredJobs } from '../data/mockData';

const FindJobs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('All');

    const categories = ['All', 'App Testing', 'Social Media', 'Data Entry', 'Sign Up', 'Writing'];

    const filteredJobs = featuredJobs.filter(job =>
        (category === 'All' || job.category === category) &&
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pt-32 pb-20 min-h-screen bg-[#f8fafc]">
            <div className="container-custom">
                {/* Header */}
                <div className="mb-12 space-y-4">
                    <h1 className="text-4xl lg:text-5xl font-black text-slate-900">Find <span className="text-gradient">Micro Jobs</span>.</h1>
                    <p className="text-lg text-slate-500 font-medium">Browse through hundreds of tasks. Complete them and earn money instantly.</p>
                </div>

                {/* Filters */}
                <div className="flex flex-col lg:flex-row gap-6 mb-12">
                    <div className="flex-1 relative">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search tasks..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-14 pr-4 py-4 rounded-xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-brand-500 outline-none font-medium"
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map(c => (
                            <button
                                key={c}
                                onClick={() => setCategory(c)}
                                className={`whitespace-nowrap px-6 py-4 rounded-xl font-bold transition-all ${category === c ? 'bg-brand-600 text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                                    }`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Jobs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredJobs.map((job) => (
                        <motion.div
                            key={job.id}
                            whileHover={{ y: -5 }}
                            className="glass-card bg-white p-8 rounded-3xl hover:shadow-premium-hover transition-all group flex flex-col h-full border border-slate-100"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="bg-brand-50 text-brand-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                                    {job.category}
                                </div>
                                <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                                    <DollarSign size={14} />
                                    <span className="font-black">{job.price}</span>
                                </div>
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-2 leading-tight">{job.title}</h4>
                            <p className="text-sm text-slate-500 mb-6 line-clamp-2 flex-grow">{job.description}</p>

                            <div className="pt-6 border-t border-slate-100 space-y-4">
                                <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                                    <span className="flex items-center gap-1"><Clock size={14} /> {job.time}</span>
                                    <span className="flex items-center gap-1"><CheckCircle size={14} className="text-emerald-500" /> {job.completed}/{job.required} Done</span>
                                </div>
                                <button className="w-full btn-outline border-brand-200 text-brand-600 hover:bg-brand-50 flex items-center justify-center gap-2">
                                    Accept Task
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FindJobs;
