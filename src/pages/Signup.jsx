import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Briefcase, ArrowRight } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const Signup = () => {
    const navigate = useNavigate();
    const { t } = useLang();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('seeker'); // 'poster', 'seeker'

    const handleSignup = (e) => {
        e.preventDefault();
        // After signup, user must update profile (Mandatory instruction requirement)
        // We will mock this by redirecting to a setup screen or directly to dashboard
        if (role === 'poster') navigate('/dashboard/poster');
        else navigate('/dashboard/seeker');
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center relative overflow-hidden pt-20 pb-12">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-emerald-200/40 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-200/40 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="w-full max-w-5xl mx-auto px-6 flex flex-col lg:flex-row-reverse items-center gap-12 relative z-10">
                {/* Right Side Content */}
                <div className="hidden lg:flex flex-1 flex-col space-y-8 pl-12">
                    <h1 className="text-5xl font-black text-slate-900 leading-tight">
                        {t('signup_title_start')} <span className="text-gradient">{t('signup_title_end')}</span>
                    </h1>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                        {t('signup_subtitle')}
                    </p>

                    <div className="space-y-6 pt-6">
                        {[
                            { title: t('signup_feature1_title'), desc: t('signup_feature1_desc') },
                            { title: t('signup_feature2_title'), desc: t('signup_feature2_desc') },
                            { title: t('signup_feature3_title'), desc: t('signup_feature3_desc') }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="mt-1 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-900">{item.title}</h4>
                                    <p className="text-sm font-medium text-slate-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Left Side Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md"
                >
                    <div className="glass-card p-8 sm:p-10 rounded-[2.5rem] shadow-premium bg-white/90">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-black text-slate-900 mb-2">{t('signup_form_title')}</h2>
                            <p className="text-slate-500 font-medium text-sm">{t('signup_form_subtitle')}</p>
                        </div>

                        {/* Role Selector */}
                        <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-8">
                            <button
                                type="button"
                                onClick={() => setRole('seeker')}
                                className={`flex-1 py-3 text-sm font-black rounded-xl transition-all ${role === 'seeker' ? 'bg-white text-emerald-600 shadow-md' : 'text-slate-500 hover:text-slate-700'
                                    }`}
                            >
                                {t('signup_role_worker')}
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole('poster')}
                                className={`flex-1 py-3 text-sm font-black rounded-xl transition-all ${role === 'poster' ? 'bg-white text-brand-600 shadow-md' : 'text-slate-500 hover:text-slate-700'
                                    }`}
                            >
                                {t('signup_role_employer')}
                            </button>
                        </div>

                        <form onSubmit={handleSignup} className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">{t('signup_name')}</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <User size={18} className="text-slate-400" />
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all font-medium text-slate-900"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">{t('login_email')}</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail size={18} className="text-slate-400" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        placeholder="john@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all font-medium text-slate-900"
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
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all font-medium text-slate-900"
                                    />
                                </div>
                            </div>

                            <button type="submit" className={`w-full text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-300 mt-4 flex items-center justify-center gap-2 group ${role === 'poster' ? 'bg-brand-600 hover:bg-brand-700 shadow-brand-500/30' : 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30'}`}>
                                {t('signup_btn')}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <p className="mt-6 text-center text-sm font-medium text-slate-500">
                            {t('signup_has_account')} <Link to="/login" className="font-bold text-brand-600 hover:text-brand-700">{t('signup_login_link')}</Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Signup;
