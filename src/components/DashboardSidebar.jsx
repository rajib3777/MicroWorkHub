import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Briefcase, LayoutDashboard, Search, PlusCircle,
    FileText, Users, DollarSign, Settings, LogOut, ShieldCheck, CreditCard, Menu, X
} from 'lucide-react';

const DashboardSidebar = ({ role, activeTab, setActiveTab }) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const navigate = useNavigate();

    const getMenu = () => {
        if (role === 'poster') {
            return [
                { id: 'overview', label: 'Overview', icon: LayoutDashboard },
                { id: 'my-jobs', label: 'My Posted Jobs', icon: Briefcase },
                { id: 'post-new', label: 'Post New Task', icon: PlusCircle },
                { id: 'hired', label: 'Hired Workers', icon: Users },
                { id: 'escrow', label: 'Escrow Finances', icon: CreditCard },
                { id: 'disputes', label: 'Disputes', icon: ShieldCheck },
            ];
        } else if (role === 'seeker') {
            return [
                { id: 'overview', label: 'Overview', icon: LayoutDashboard },
                { id: 'find-jobs', label: 'Find Work', icon: Search },
                { id: 'active-bids', label: 'Active Tasks', icon: FileText },
                { id: 'earnings', label: 'Earnings & Withdraw', icon: DollarSign },
                { id: 'employers', label: 'My Employers', icon: Users },
                { id: 'disputes', label: 'Disputes', icon: ShieldCheck },
            ];
        } else { // admin
            return [
                { id: 'overview', label: 'Platform Analytics', icon: LayoutDashboard },
                { id: 'all-users', label: 'Manage Users', icon: Users },
                { id: 'all-jobs', label: 'All Posted Jobs', icon: Briefcase },
                { id: 'finances', label: 'Global Finances', icon: DollarSign },
                { id: 'disputes', label: 'Dispute Center', icon: ShieldCheck },
            ];
        }
    };

    const handleLogout = () => {
        // mock logout
        navigate('/');
    };

    const menuItems = getMenu();

    return (
        <>
            {/* Mobile Header Toggle */}
            <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-50 flex items-center justify-between px-6">
                <div className="flex items-center gap-2">
                    <Briefcase size={20} className="text-brand-600" />
                    <span className="font-black text-slate-900 tracking-tight">MicroWorkHub</span>
                </div>
                <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-slate-600">
                    {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Sidebar Desktop & Mobile */}
            <motion.aside
                className={`fixed lg:sticky top-0 left-0 h-screen w-[280px] bg-white border-r border-slate-200 z-40 transition-transform duration-300 flex flex-col ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
            >
                <div className="p-6 hidden lg:flex items-center gap-3">
                    <div className="bg-gradient-to-tr from-brand-600 to-cyan-400 p-2 rounded-xl text-white shadow-lg">
                        <Briefcase size={24} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">MicroWork<span className="text-brand-600">Hub</span></span>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-2 mt-16 lg:mt-0">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeTab === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => { setActiveTab(item.id); setIsMobileOpen(false); }}
                                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold transition-all ${isActive
                                        ? 'bg-brand-50 text-brand-600'
                                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                                    }`}
                            >
                                <Icon size={20} className={isActive ? 'text-brand-600' : 'text-slate-400'} />
                                {item.label}
                            </button>
                        );
                    })}
                </div>

                <div className="p-4 border-t border-slate-100 space-y-2">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all">
                        <Settings size={20} className="text-slate-400" /> Settings
                    </button>
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-red-500 hover:bg-red-50 transition-all">
                        <LogOut size={20} className="text-red-400" /> Log Out
                    </button>
                </div>
            </motion.aside>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-30 lg:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}
        </>
    );
};

export default DashboardSidebar;
