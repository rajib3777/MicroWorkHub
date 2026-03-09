import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Users, Zap, CheckCircle2 } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const AboutUs = () => {
    const { t } = useLang();

    return (
        <div className="min-h-screen bg-[#f8fafc] pt-24 pb-16">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 pb-32">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80"
                        alt="About Us Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
                </div>
                <div className="container-custom relative z-10 text-center text-white space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black tracking-tight"
                    >
                        {t('about_title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-cyan-50 font-medium max-w-3xl mx-auto leading-relaxed"
                    >
                        {t('about_subtitle')}
                    </motion.p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="container-custom -mt-16 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card bg-white p-10 rounded-[2.5rem] shadow-premium"
                    >
                        <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6">
                            <Target size={32} />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 mb-4">{t('about_mission_title')}</h2>
                        <p className="text-slate-600 font-medium leading-relaxed text-lg">
                            {t('about_mission_desc')}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card bg-white p-10 rounded-[2.5rem] shadow-premium"
                    >
                        <div className="w-16 h-16 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                            <Zap size={32} />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 mb-4">{t('about_vision_title')}</h2>
                        <p className="text-slate-600 font-medium leading-relaxed text-lg">
                            {t('about_vision_desc')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="bg-gradient-to-r from-brand-600 to-cyan-500 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-white/20 divide-y md:divide-y-0 md:divide-x">
                            <div className="p-4">
                                <h3 className="text-5xl font-black mb-2">45K+</h3>
                                <p className="text-cyan-50 font-bold uppercase tracking-widest">{t('about_stats_users')}</p>
                            </div>
                            <div className="p-4">
                                <h3 className="text-5xl font-black mb-2">120K+</h3>
                                <p className="text-cyan-50 font-bold uppercase tracking-widest">{t('about_stats_jobs')}</p>
                            </div>
                            <div className="p-4">
                                <h3 className="text-5xl font-black mb-2">৳ 15M+</h3>
                                <p className="text-cyan-50 font-bold uppercase tracking-widest">{t('about_stats_paid')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-12 bg-white">
                <div className="container-custom text-center max-w-4xl mx-auto space-y-16">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-black text-slate-900">{t('about_team_title')}</h2>
                        <p className="text-slate-500 font-medium text-lg">{t('about_team_subtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: ShieldCheck, title: 'Trust & Safety', color: 'text-emerald-500', bg: 'bg-emerald-50' },
                            { icon: Users, title: 'Community First', color: 'text-brand-500', bg: 'bg-brand-50' },
                            { icon: CheckCircle2, title: 'Quality Work', color: 'text-amber-500', bg: 'bg-amber-50' }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center space-y-4 p-6 glass-card rounded-3xl hover:-translate-y-2 transition-transform cursor-pointer">
                                <div className={`w-20 h-20 rounded-full ${item.bg} ${item.color} flex items-center justify-center`}>
                                    <item.icon size={36} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
