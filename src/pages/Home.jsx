import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Play, ArrowRight, Star, Clock, Briefcase, Zap, CheckCircle, TrendingUp, DollarSign, Search, Send, Mail, User } from 'lucide-react';
import { featuredJobs, topWorkers, testimonials } from '../data/mockData';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

const Home = () => {
    const { t } = useLang();

    return (
        <div className="bg-[#f8fafc] min-h-screen">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80"
                        alt="Hero Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Light overlay for text readability */}
                    <div className="absolute inset-0 bg-slate-50/80 backdrop-blur-[2px]"></div>
                </div>

                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0 mix-blend-multiply opacity-60">
                    <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-400/20 rounded-full blur-[100px] animate-blob"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-[20%] right-[30%] w-[300px] h-[300px] bg-purple-400/20 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '4s' }}></div>
                </div>

                <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-card text-brand-600 font-black text-[10px] uppercase tracking-widest shadow-lg"
                        >
                            <ShieldCheck size={16} className="text-emerald-500" />
                            <span>{t('hero_badge')}</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl lg:text-8xl font-black text-slate-900 leading-[1.1] tracking-tighter"
                        >
                            {t('hero_h1_line1')} <span className="text-gradient">{t('hero_h1_word1')}</span>.<br />
                            {t('hero_h1_line2')} <span className="text-emerald-500">{t('hero_h1_word2')}</span>.<br />
                            {t('hero_h1_line3')} <span className="text-slate-800">{t('hero_h1_word3')}</span>.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-slate-600 font-medium leading-relaxed max-w-lg"
                        >
                            {t('hero_subtitle')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link to="/signup" className="btn-primary text-center">
                                {t('hero_cta_earn')}
                            </Link>
                            <Link to="/post-job" className="btn-outline flex items-center justify-center gap-2 group">
                                <Play size={18} className="text-brand-500 group-hover:text-brand-600" />
                                {t('hero_cta_post')}
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center gap-6 pt-6 border-t border-slate-200/60"
                        >
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-[#f8fafc] bg-slate-200 overflow-hidden shadow-sm">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`User ${i}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1 text-amber-400">
                                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
                                </div>
                                <p className="text-sm font-bold text-slate-600">{t('hero_rated')}</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1 relative w-full">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, type: 'spring' }}
                            className="relative w-full max-w-lg mx-auto aspect-square bg-gradient-to-tr from-brand-100 to-cyan-50 rounded-[3rem] shadow-glass flex items-center justify-center animate-float overflow-hidden"
                        >
                            {/* Abstract Geometric Art for Hero -> Replaced with an image */}
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
                                alt="Freelacer working on laptop"
                                className="absolute w-full h-full object-cover z-0 rounded-[3rem]"
                            />

                            {/* Floating UI Elements inside Hero */}
                            <div className="absolute top-10 left-[-20px] glass-card p-4 rounded-2xl flex items-center gap-3 shadow-premium animate-bounce z-10" style={{ animationDuration: '3s' }}>
                                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                                    <DollarSign size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase">{t('hero_payment_received')}</p>
                                    <p className="text-sm font-black text-slate-800">+ ৳ 400</p>
                                </div>
                            </div>

                            <div className="absolute bottom-20 right-[-30px] glass-card p-4 rounded-2xl flex items-center gap-3 shadow-premium animate-bounce z-10" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                                <div className="w-10 h-10 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center">
                                    <CheckCircle size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase">{t('hero_task_approved')}</p>
                                    <p className="text-sm font-black text-slate-800">SEO Writing</p>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS SECTION */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2850&q=80"
                        alt="Workspace How it works"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
                        <h2 className="text-4xl font-black text-slate-900">{t('hiw_title')}<span className="text-brand-600">{t('hiw_title_end')}</span></h2>
                        <p className="text-slate-600 font-medium">{t('hiw_subtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-brand-100 via-brand-300 to-cyan-100 -translate-y-1/2 z-0"></div>

                        {[
                            { step: '01', title: t('hiw_step1_title'), desc: t('hiw_step1_desc'), icon: Search, color: 'text-brand-500', bg: 'bg-brand-50' },
                            { step: '02', title: t('hiw_step2_title'), desc: t('hiw_step2_desc'), icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
                            { step: '03', title: t('hiw_step3_title'), desc: t('hiw_step3_desc'), icon: ShieldCheck, color: 'text-emerald-500', bg: 'bg-emerald-50' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="glass-card p-10 bg-white/80 backdrop-blur-md border-white/60 text-center rounded-[2.5rem] relative z-10 shadow-premium group"
                            >
                                <div className={`w-20 h-20 mx-auto rounded-full ${item.bg} flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform`}>
                                    <item.icon size={32} className={item.color} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-sm font-medium text-slate-600">{item.desc}</p>
                                <div className="absolute top-6 right-6 text-4xl font-black text-slate-200 select-none opacity-50">{item.step}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PLATFORM STATISTICS */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
                        <h2 className="text-4xl font-black text-slate-900">{t('home_stats_title')}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x border-slate-200">
                        <div className="p-4">
                            <h3 className="text-5xl font-black text-brand-600 mb-2">45K+</h3>
                            <p className="font-bold text-slate-500 uppercase tracking-widest">{t('home_stats_users')}</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-5xl font-black text-emerald-500 mb-2">120K+</h3>
                            <p className="font-bold text-slate-500 uppercase tracking-widest">{t('home_stats_jobs')}</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-5xl font-black text-amber-500 mb-2">৳ 15M+</h3>
                            <p className="font-bold text-slate-500 uppercase tracking-widest">{t('home_stats_paid')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* LIVE JOBS PREVIEW */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-black text-slate-900">{t('featured_title')}</h2>
                            <p className="text-slate-500 font-medium max-w-lg">{t('featured_subtitle')}</p>
                        </div>
                        <Link to="/jobs" className="btn-outline flex items-center gap-2 group whitespace-nowrap">
                            {t('featured_view_all')}
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredJobs.slice(0, 6).map((job) => (
                            <div key={job.id} className="glass-card bg-white p-8 rounded-3xl hover:shadow-premium-hover transition-all group flex flex-col h-full border-transparent hover:border-brand-200">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="bg-brand-50 text-brand-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                                        {job.category}
                                    </div>
                                    <div className="text-xl font-black text-slate-900">{job.price}</div>
                                </div>
                                <h4 className="text-lg font-black text-slate-900 mb-2 leading-tight group-hover:text-brand-600 transition-colors">{job.title}</h4>
                                <p className="text-sm text-slate-500 mb-6 line-clamp-2">{job.description}</p>

                                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                                    <span className="flex items-center gap-1"><Clock size={14} /> {job.time}</span>
                                    <span className="flex items-center gap-1"><CheckCircle size={14} className="text-emerald-500" /> {job.completed}/{job.required} {t('job_done')}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TOP WORKERS */}
            <section className="py-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2850&q=80"
                        alt="Team of top workers"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"></div>
                </div>

                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none z-0"></div>

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
                        <h2 className="text-4xl font-black">{t('workers_title')} <span className="text-cyan-400">{t('workers_title2')}</span></h2>
                        <p className="text-slate-300 font-medium">{t('workers_subtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {topWorkers.map((worker, i) => (
                            <div key={worker.id} className="glass-panel p-8 rounded-3xl text-center group hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-20 h-20 mx-auto rounded-2xl mb-4 overflow-hidden border-2 border-slate-700 group-hover:border-cyan-400 transition-colors">
                                    <img src={`https://i.pravatar.cc/150?img=${i + 30}`} alt={worker.name} className="w-full h-full object-cover" />
                                </div>
                                <h4 className="text-lg font-black mb-1">{worker.name}</h4>
                                <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4">{worker.title}</p>

                                <div className="flex justify-center gap-4 text-sm font-medium text-slate-400 pt-4 border-t border-white/10">
                                    <div className="text-center">
                                        <p className="text-[10px] uppercase">{t('workers_jobs')}</p>
                                        <p className="font-black text-white">{worker.jobsDone}</p>
                                    </div>
                                    <div className="w-px h-8 bg-white/10"></div>
                                    <div className="text-center">
                                        <p className="text-[10px] uppercase">{t('workers_earned')}</p>
                                        <p className="font-black text-emerald-400">{worker.earn}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
                        <h2 className="text-4xl font-black text-slate-900">{t('testimonials_title')}</h2>
                        <p className="text-slate-500 font-medium">{t('testimonials_subtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonialData, i) => (
                            <div key={i} className="glass-card bg-white p-10 rounded-3xl relative">
                                <TrendingUp className="absolute top-10 right-10 text-brand-100" size={80} />
                                <div className="relative z-10">
                                    <div className="flex gap-1 mb-6 text-amber-400">
                                        {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                                    </div>
                                    {/* Testimonial data texts from mockData could also be translated if needed, kept as is for now */}
                                    <p className="text-slate-600 font-medium italic mb-8 leading-relaxed">"{testimonialData.text}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 40}`} alt={testimonialData.name} />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-900">{testimonialData.name}</h4>
                                            <p className="text-xs font-bold text-brand-600 uppercase tracking-widest">{testimonialData.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* WHY CHOOSE US */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
                        <h2 className="text-4xl font-black text-slate-900">{t('home_why_title')}</h2>
                        <p className="text-slate-500 font-medium">{t('home_why_subtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: t('home_why_1_title'), desc: t('home_why_1_desc'), icon: ShieldCheck, color: 'text-emerald-500', bg: 'bg-emerald-50' },
                            { title: t('home_why_2_title'), desc: t('home_why_2_desc'), icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
                            { title: t('home_why_3_title'), desc: t('home_why_3_desc'), icon: Briefcase, color: 'text-brand-500', bg: 'bg-brand-50' }
                        ].map((item, i) => (
                            <div key={i} className="glass-card bg-white p-10 rounded-3xl text-center group hover:-translate-y-2 transition-transform cursor-pointer">
                                <div className={`w-20 h-20 mx-auto rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <item.icon size={36} className={item.color} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-500 font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT SUPPORT SECTION */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="glass-card bg-white p-12 lg:p-20 rounded-[3rem] shadow-premium flex flex-col lg:flex-row gap-16 items-center border border-slate-100">
                        <div className="flex-1 space-y-8 text-center lg:text-left">
                            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                                {t('support_title')}
                            </h2>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed">
                                {t('support_subtitle')}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Us</p>
                                        <p className="font-bold text-slate-900 text-sm">support@microworkhub.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center shrink-0">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Help Center</p>
                                        <p className="font-bold text-slate-900 text-sm">24/7 Support Desk</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 w-full max-w-lg">
                            <form className="space-y-4">
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        type="text"
                                        placeholder={t('support_placeholder_name')}
                                        className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all font-medium text-slate-900"
                                    />
                                </div>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        type="email"
                                        placeholder={t('support_placeholder_email')}
                                        className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all font-medium text-slate-900"
                                    />
                                </div>
                                <textarea
                                    rows="4"
                                    placeholder={t('support_placeholder_msg')}
                                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all font-medium text-slate-900 resize-none"
                                ></textarea>
                                <button type="button" className="w-full btn-primary py-4 flex items-center justify-center gap-2 group">
                                    {t('support_btn')}
                                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="bg-gradient-to-r from-brand-600 to-cyan-500 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                            <h2 className="text-4xl lg:text-6xl font-black tracking-tight leading-tight">{t('cta_title')}</h2>
                            <p className="text-xl text-cyan-50 font-medium">{t('cta_subtitle')}</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                                <Link to="/signup" className="bg-white text-brand-600 font-black py-4 px-8 rounded-xl shadow-2xl hover:scale-105 transition-transform">
                                    {t('cta_btn')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
