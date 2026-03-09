import React, { useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import { seekerStats } from '../data/mockData';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FileText, CheckCircle, DollarSign, Wallet, ArrowUpRight, ShieldCheck } from 'lucide-react';

const SeekerDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Stats Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: 'Total Earned', value: seekerStats.totalEarned, icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-100' },
                                { title: 'Jobs Completed', value: seekerStats.jobsDone, icon: CheckCircle, color: 'text-brand-600', bg: 'bg-brand-100' },
                                { title: 'Success Rate', value: seekerStats.successRate, icon: ArrowUpRight, color: 'text-amber-500', bg: 'bg-amber-100' },
                                { title: 'Pending Wallet', value: seekerStats.pendingBalance, icon: Wallet, color: 'text-purple-600', bg: 'bg-purple-100' },
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
                        <div className="glass-card bg-white p-8 rounded-3xl border border-slate-100">
                            <h3 className="text-xl font-black text-slate-900 mb-6">Earnings Timeline</h3>
                            <div className="h-[400px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={seekerStats.monthlyData}>
                                        <defs>
                                            <linearGradient id="colorEarn" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} dy={10} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} dx={-10} tickFormatter={(val) => `৳${val}`} />
                                        <Tooltip
                                            contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                                            cursor={{ stroke: '#cbd5e1', strokeWidth: 2, strokeDasharray: '5 5' }}
                                        />
                                        <Area type="monotone" dataKey="earn" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorEarn)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Recent Jobs Table */}
                        <div className="glass-card bg-white p-8 rounded-3xl overflow-hidden">
                            <h3 className="text-xl font-black text-slate-900 mb-6">Recently Finished Tasks</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm text-slate-500 font-medium">
                                    <thead className="text-xs uppercase tracking-widest bg-slate-50 text-slate-700">
                                        <tr>
                                            <th className="px-6 py-4 rounded-tl-xl rounded-bl-xl font-black">Task Name</th>
                                            <th className="px-6 py-4 font-black">Employer</th>
                                            <th className="px-6 py-4 font-black">Earned</th>
                                            <th className="px-6 py-4 rounded-tr-xl rounded-br-xl font-black">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { name: 'App Testing - Review', emp: 'TechNova bd', amt: '৳ 150', status: 'Paid', statusColor: 'bg-emerald-100 text-emerald-600' },
                                            { name: 'Content Moderation', emp: 'Global IT Solutions', amt: '৳ 400', status: 'Pending Approval', statusColor: 'bg-amber-100 text-amber-600' },
                                            { name: 'Instagram Likes', emp: 'Digital Marketer', amt: '৳ 15', status: 'Paid', statusColor: 'bg-emerald-100 text-emerald-600' },
                                            { name: 'Verify Email', emp: 'CryptoKing', amt: '৳ 250', status: 'Rejected', statusColor: 'bg-red-100 text-red-600' },
                                        ].map((j, idx) => (
                                            <tr key={idx} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-slate-900 whitespace-nowrap">{j.name}</td>
                                                <td className="px-6 py-4">{j.emp}</td>
                                                <td className="px-6 py-4 font-black text-slate-700">{j.amt}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${j.statusColor}`}>
                                                        {j.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );
            case 'earnings':
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
                        <div className="bg-gradient-to-r from-brand-600 to-cyan-500 rounded-[2.5rem] p-10 text-white shadow-premium relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div>
                                    <p className="text-cyan-100 font-bold tracking-widest uppercase mb-1">Available for Withdrawal</p>
                                    <h2 className="text-5xl font-black">৳ 4,500.00</h2>
                                </div>
                                <div className="flex gap-4">
                                    <button className="bg-white text-brand-600 font-black py-3 px-8 rounded-xl shadow-lg hover:-translate-y-1 transition-transform">
                                        Withdraw via bKash
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="glass-card bg-white p-8 rounded-3xl">
                                <h3 className="text-lg font-black text-slate-900 mb-6">Payment Method</h3>
                                <div className="border border-brand-200 bg-brand-50 p-6 rounded-2xl flex items-start justify-between">
                                    <div className="space-y-1">
                                        <p className="text-xs font-black text-brand-600 uppercase tracking-widest">Active Account</p>
                                        <p className="text-lg font-bold text-slate-900">bKash Personal</p>
                                        <p className="text-slate-500 font-medium">019xxxxxxxx</p>
                                    </div>
                                    <button className="text-sm font-bold text-brand-600 hover:text-brand-700 underline">Change</button>
                                </div>
                            </div>

                            <div className="glass-card bg-white p-8 rounded-3xl">
                                <h3 className="text-lg font-black text-slate-900 mb-6">Withdrawal Rules</h3>
                                <ul className="space-y-3 text-sm font-medium text-slate-600">
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" /> Minimum withdrawal is ৳ 200</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" /> Processing takes 24-48 business hours</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" /> 2% flat fee on all bKash withdrawals</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            case 'disputes':
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
                        <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl flex items-start gap-4">
                            <ShieldCheck size={24} className="text-amber-500 shrink-0" />
                            <div>
                                <h4 className="font-black text-amber-800 text-lg mb-1">Dispute Center</h4>
                                <p className="text-sm font-medium text-amber-700">If your task was incorrectly rejected, you can file a dispute here. Our admin team will manually review the proof against instructions.</p>
                                <button className="mt-4 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">Open New Dispute</button>
                            </div>
                        </div>

                        <div className="glass-card bg-white p-8 rounded-3xl">
                            <h3 className="text-xl font-black text-slate-900 mb-6">Active Tickets</h3>
                            <div className="text-center py-12">
                                <FileText size={48} className="mx-auto text-slate-200 mb-4" />
                                <p className="text-slate-500 font-medium">You have no active disputes at the moment.</p>
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
            <DashboardSidebar role="seeker" activeTab={activeTab} setActiveTab={setActiveTab} />

            <main className="flex-1 lg:ml-0 pt-20 lg:pt-0">
                <header className="bg-white/70 backdrop-blur-xl border-b border-slate-200 px-8 py-6 sticky top-0 z-20 justify-between items-center hidden lg:flex">
                    <h2 className="text-2xl font-black text-slate-900 capitalize">{activeTab.replace('-', ' ')}</h2>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-sm font-black text-slate-900">Arif Ahmed</p>
                            <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Freelancer</p>
                        </div>
                        <img src="https://i.pravatar.cc/150?img=12" alt="Profile" className="w-12 h-12 rounded-2xl border-2 border-slate-200" />
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

export default SeekerDashboard;
