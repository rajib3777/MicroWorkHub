import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, AlertCircle, Briefcase, ArrowRight } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const Login = () => {
    const navigate = useNavigate();
    const { t } = useLang();
    const [email, setEmail] = useState('poster@microworkhub.com');
    const [password, setPassword] = useState('password123');
    const [role, setRole] = useState('poster'); // 'poster', 'seeker', 'admin'

    const handleLogin = (e) => {
        e.preventDefault();
        // Redirect based on selected role
        if (role === 'admin') navigate('/dashboard/admin');
        else if (role === 'seeker') navigate('/dashboard/seeker');
        else navigate('/dashboard/poster');
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center relative overflow-hidden pt-20 pb-12">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-200/50 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-200/50 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="w-full max-w-5xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 relative z-10">
                {/* Left Side Content */}
                <div className="hidden lg:flex flex-1 flex-col space-y-8">
                    <Link to="/" className="flex items-center gap-2 mb-8">
                        <div className="bg-gradient-to-tr from-brand-600 to-cyan-400 p-2 rounded-xl text-white shadow-lg">
                            <Briefcase size={24} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">MicroWork<span className="text-brand-600">Hub</span></span>
                        </div>
                    </Link>

                    <h1 className="text-5xl font-black text-slate-900 leading-tight">
                        Welcome Back to the <span className="text-gradient">Future of Work.</span>
                    </h1>
                    <p className="text-lg text-slate-500 font-medium">
                        {t('login_subtitle')}
                    </p>

                    <div className="glass-card p-6 rounded-2xl flex items-center gap-4 max-w-md border-l-4 border-l-brand-500">
                        <AlertCircle className="text-brand-500 flex-shrink-0" size={24} />
                        <p className="text-sm font-bold text-slate-700">
                            For demonstration purposes, you can select your role directly in the form to view different dashboards.
                        </p>
                    </div>
                </div>

                {/* Right Side Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md"
                >
                    <div className="glass-card p-8 sm:p-10 rounded-[2.5rem] shadow-premium bg-white/80">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-black text-slate-900 mb-2">{t('login_title')}</h2>
                            <p className="text-slate-500 font-medium text-sm">{t('login_subtitle')}</p>
                        </div>

                        {/* Role Selector Tabs (Mock Only) */}
                        <div className="flex bg-slate-100 p-1 rounded-xl mb-8">
                            {['poster', 'seeker', 'admin'].map((r) => (
                                <button
                                    key={r}
                                    type="button"
                                    onClick={() => setRole(r)}
                                    className={`flex-1 py-2 text-xs font-black uppercase tracking-widest rounded-lg transition-all ${role === r ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                                        }`}
                                >
                                    {r}
                                </button>
                            ))}
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">{t('login_email')}</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail size={18} className="text-slate-400" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all font-medium text-slate-900"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">{t('login_password')}</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock size={18} className="text-slate-400" />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all font-medium text-slate-900"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-slate-300" />
                                    <span className="text-sm font-medium text-slate-600">{t('login_remember')}</span>
                                </label>
                                <a href="#" className="text-sm font-bold text-brand-600 hover:text-brand-700">{t('login_forgot')}</a>
                            </div>

                            <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 group">
                                {t('login_btn')}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <p className="mt-8 text-center text-sm font-medium text-slate-500">
                            {t('login_no_account')} <Link to="/signup" className="font-bold text-brand-600 hover:text-brand-700">{t('login_signup_link')}</Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
