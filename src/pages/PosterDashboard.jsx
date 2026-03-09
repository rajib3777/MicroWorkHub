import React, { useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import { posterStats } from '../data/mockData';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Briefcase, CreditCard, DollarSign, Star, Clock } from 'lucide-react';

const PosterDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Stats Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: 'Total Spent', value: posterStats.totalSpent, icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-100' },
                                { title: 'Active Jobs', value: posterStats.activeJobs, icon: Briefcase, color: 'text-brand-600', bg: 'bg-brand-100' },
                                { title: 'Completed Tasks', value: posterStats.completedJobs, icon: Star, color: 'text-amber-500', bg: 'bg-amber-100' },
                                { title: 'Pending Reviews', value: posterStats.pendingReviews, icon: Clock, color: 'text-purple-600', bg: 'bg-purple-100' },
                            ].map((stat, i) => (
                                <div key={i} className="glass-card bg-white p-6 rounded-3xl flex items-center gap-4">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                                        <stat.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.title}</p>
                                        <h3 className="text-2xl font-black text-slate-800">{stat.value}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Chart */}
                        <div className="glass-card bg-white p-8 rounded-3xl">
                            <h3 className="text-xl font-black text-slate-900 mb-6">Spending Analytics</h3>
                            <div className="h-[400px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={posterStats.monthlyData}>
                                        <defs>
                                            <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} dy={10} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} dx={-10} tickFormatter={(val) => `৳${val}`} />
                                        <Tooltip
                                            contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                                            cursor={{ stroke: '#cbd5e1', strokeWidth: 2, strokeDasharray: '5 5' }}
                                        />
                                        <Area type="monotone" dataKey="spend" stroke="#0ea5e9" strokeWidth={4} fillOpacity={1} fill="url(#colorSpend)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                );
            case 'escrow':
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2.5rem] p-10 text-white shadow-premium relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                            <div className="relative z-10">
                                <p className="text-emerald-100 font-bold tracking-widest uppercase mb-1">Available Escrow Balance</p>
                                <h2 className="text-5xl font-black mb-6">৳ 12,450.00</h2>
                                <div className="flex gap-4">
                                    <button className="bg-white text-emerald-600 font-black py-3 px-8 rounded-xl shadow-lg hover:-translate-y-1 transition-transform">
                                        + Deposit via bKash
                                    </button>
                                    <button className="btn-outline border-white text-white hover:bg-white/10 hover:border-white hover:text-white flex items-center gap-2">
                                        <CreditCard size={18} /> Bank Transfer
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card bg-white p-8 rounded-3xl">
                            <h3 className="text-xl font-black text-slate-900 mb-6">Recent Transactions</h3>
                            <div className="space-y-4">
                                {[
                                    { id: 'TRX-9823', type: 'Deposit', method: 'bKash', amount: '+ ৳ 5000', status: 'Success', date: 'Today, 10:30 AM' },
                                    { id: 'TRX-9822', type: 'Escrow Lock', method: 'Job #45', amount: '- ৳ 1500', status: 'Locked', date: 'Yesterday, 2:15 PM' },
                                    { id: 'TRX-9821', type: 'Released', method: 'Worker Pay', amount: '- ৳ 450', status: 'Completed', date: 'Oct 12, 5:00 PM' },
                                ].map((trx, i) => (
                                    <div key={i} className="flex flex-wrap items-center justify-between p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${trx.type === 'Deposit' ? 'bg-emerald-100 text-emerald-600' : trx.type === 'Released' ? 'bg-slate-100 text-slate-600' : 'bg-amber-100 text-amber-600'}`}>
                                                <DollarSign size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900">{trx.type} - {trx.method}</h4>
                                                <p className="text-xs text-slate-500 font-medium">{trx.date} • {trx.id}</p>
                                            </div>
                                        </div>
                                        <div className="text-right mt-2 sm:mt-0">
                                            <p className={`font-black ${trx.type === 'Deposit' ? 'text-emerald-500' : 'text-slate-900'}`}>{trx.amount}</p>
                                            <p className={`text-[10px] font-black uppercase tracking-widest ${trx.status === 'Success' ? 'text-emerald-500' : trx.status === 'Locked' ? 'text-amber-500' : 'text-slate-400'}`}>{trx.status}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            default:
                return <div className="p-8 text-center text-slate-500 font-medium glass-card bg-white rounded-3xl">Module under construction in this mock interface.</div>;
        }
    };

    return (
        <div className="flex min-h-screen bg-[#f8fafc]">
            <DashboardSidebar role="poster" activeTab={activeTab} setActiveTab={setActiveTab} />

            <main className="flex-1 lg:ml-0 pt-20 lg:pt-0">
                {/* Header */}
                <header className="bg-white/70 backdrop-blur-xl border-b border-slate-200 px-8 py-6 sticky top-0 z-20 flex justify-between items-center hidden lg:flex">
                    <h2 className="text-2xl font-black text-slate-900 capitalize">{activeTab.replace('-', ' ')}</h2>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-sm font-black text-slate-900">TechNova Bd</p>
                            <p className="text-xs font-bold text-brand-600 uppercase tracking-widest">Employer</p>
                        </div>
                        <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-12 h-12 rounded-2xl border-2 border-slate-200" />
                    </div>
                </header>

                {/* Content Area */}
                <div className="p-4 lg:p-8">
                    {/* Mobile Title */}
                    <h2 className="text-2xl font-black text-slate-900 capitalize mb-6 lg:hidden">{activeTab.replace('-', ' ')}</h2>
                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

export default PosterDashboard;
