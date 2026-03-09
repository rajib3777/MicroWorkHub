import React, { useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import { adminStats } from '../data/mockData';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, Users, Briefcase, ShieldCheck, AlertTriangle, Ban } from 'lucide-react';

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Global Platform Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: 'Net Revenue', value: adminStats.totalRevenue, icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-100' },
                                { title: 'Total Users', value: adminStats.totalUsers, icon: Users, color: 'text-brand-600', bg: 'bg-brand-100' },
                                { title: 'Total Jobs', value: adminStats.totalJobs, icon: Briefcase, color: 'text-purple-600', bg: 'bg-purple-100' },
                                { title: 'Pending Disputes', value: adminStats.activeDisputes, icon: AlertTriangle, color: 'text-rose-600', bg: 'bg-rose-100' },
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

                        {/* Revenue Chart */}
                        <div className="glass-card bg-white p-8 rounded-3xl border border-slate-100">
                            <h3 className="text-xl font-black text-slate-900 mb-6">Platform Revenue (10% Fee)</h3>
                            <div className="h-[400px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={adminStats.revenueData}>
                                        <defs>
                                            <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} dy={10} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} dx={-10} tickFormatter={(val) => `৳${val / 1000}k`} />
                                        <Tooltip
                                            contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                                            cursor={{ stroke: '#cbd5e1', strokeWidth: 2, strokeDasharray: '5 5' }}
                                        />
                                        <Area type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                );
            case 'all-users':
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="glass-card bg-white p-8 rounded-3xl overflow-hidden">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-black text-slate-900">User Management</h3>
                                <div className="flex bg-slate-100 p-1 rounded-xl">
                                    <button className="px-4 py-1.5 text-xs font-black uppercase rounded-lg bg-white shadow-sm text-brand-600">All</button>
                                    <button className="px-4 py-1.5 text-xs font-black uppercase rounded-lg text-slate-500">Seekers</button>
                                    <button className="px-4 py-1.5 text-xs font-black uppercase rounded-lg text-slate-500">Posters</button>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm text-slate-600 font-medium">
                                    <thead className="text-xs uppercase tracking-widest bg-slate-50 text-slate-700">
                                        <tr>
                                            <th className="px-6 py-4 rounded-tl-xl rounded-bl-xl font-black">User</th>
                                            <th className="px-6 py-4 font-black">Role</th>
                                            <th className="px-6 py-4 font-black">Status</th>
                                            <th className="px-6 py-4 rounded-tr-xl rounded-br-xl font-black text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { name: 'Arif Ahmed', email: 'arif@example.com', role: 'Seeker', status: 'Active' },
                                            { name: 'TechNova Bd', email: 'hello@technova.bd', role: 'Poster', status: 'Active' },
                                            { name: 'Scammer123', email: 'fake@spam.com', role: 'Seeker', status: 'Banned' },
                                            { name: 'Tania Akter', email: 'tania@mail.com', role: 'Seeker', status: 'Active' },
                                        ].map((u, idx) => (
                                            <tr key={idx} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <p className="font-bold text-slate-900">{u.name}</p>
                                                    <p className="text-xs text-slate-400">{u.email}</p>
                                                </td>
                                                <td className="px-6 py-4 font-bold">{u.role}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${u.status === 'Active' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                                                        {u.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    {u.status === 'Active' ? (
                                                        <button className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors tooltip" title="Ban User">
                                                            <Ban size={18} />
                                                        </button>
                                                    ) : (
                                                        <button className="text-slate-400 hover:text-slate-600 p-2 text-xs font-bold underline">Unban</button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );
            case 'disputes':
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="glass-card bg-white p-8 rounded-3xl">
                            <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                                <ShieldCheck className="text-brand-600" /> Resolution Center
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { id: '#DSP-091', job: 'App Testing (TechNova)', seeker: 'Rakib H.', issue: 'Unfair Rejection', status: 'Pending Review' },
                                    { id: '#DSP-092', job: 'Data Entry (Global IT)', seeker: 'Sadia R.', issue: 'Delayed Payment', status: 'Open' },
                                    { id: '#DSP-093', job: 'Sign Up (CryptoKing)', seeker: 'Imran H.', issue: 'Invalid Proof', status: 'Resolved' },
                                ].map((d, i) => (
                                    <div key={i} className="border border-slate-200 p-6 rounded-2xl relative">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="text-xs font-black text-slate-400">{d.id}</span>
                                            <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${d.status === 'Resolved' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>
                                                {d.status}
                                            </span>
                                        </div>
                                        <h4 className="font-bold text-slate-900 line-clamp-1 mb-1">{d.job}</h4>
                                        <p className="text-sm text-slate-500 mb-6">Seeker: {d.seeker} <br /> Issue: {d.issue}</p>

                                        {d.status !== 'Resolved' && (
                                            <div className="flex gap-2">
                                                <button className="flex-1 bg-brand-50 text-brand-600 py-2 rounded-lg text-xs font-bold hover:bg-brand-100 transition-colors">Review Proof</button>
                                                <button className="flex-1 bg-rose-50 text-rose-600 py-2 rounded-lg text-xs font-bold hover:bg-rose-100 transition-colors">Close / Refund</button>
                                            </div>
                                        )}
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
            <DashboardSidebar role="admin" activeTab={activeTab} setActiveTab={setActiveTab} />

            <main className="flex-1 lg:ml-0 pt-20 lg:pt-0">
                <header className="bg-slate-900 border-b border-slate-800 px-8 py-6 sticky top-0 z-20 justify-between items-center hidden lg:flex">
                    <h2 className="text-2xl font-black text-white capitalize">{activeTab.replace('-', ' ')}</h2>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-sm font-black text-white">System Admin</p>
                            <p className="text-xs font-bold text-rose-400 uppercase tracking-widest">Master Control</p>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center font-black text-xl shadow-lg border-2 border-slate-800">
                            SA
                        </div>
                    </div>
                </header>

                <div className="p-4 lg:p-8">
                    <h2 className="text-2xl font-black text-slate-900 capitalize mb-6 lg:hidden">{activeTab.replace('-', ' ')}</h2>
                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

export default AdminPanel;
