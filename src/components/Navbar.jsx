import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Briefcase, ArrowRight, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../context/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const { t, lang, toggleLang } = useLang();

    const isDashboard = location.pathname.includes('dashboard') || location.pathname.includes('admin');

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav_home'), path: '/' },
        { name: t('nav_find_jobs'), path: '/jobs' },
        { name: t('nav_post_job'), path: '/post-job' },
        { name: t('nav_about'), path: '/about' },
    ];

    if (isDashboard) return null;

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
            <div className="container-custom">
                <div className={`glass-card rounded-2xl px-6 py-4 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'shadow-premium bg-white/90' : 'bg-white/60'}`}>

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="bg-gradient-to-tr from-brand-600 to-cyan-400 p-2 rounded-xl text-white shadow-lg group-hover:rotate-12 transition-transform">
                            <Briefcase size={24} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">MicroWork<span className="text-brand-600">Hub</span></span>
                            <span className="text-[9px] font-black text-slate-400 tracking-widest uppercase">Premium Jobs</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-sm font-bold text-slate-600 hover:text-brand-600 transition-colors uppercase tracking-widest relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        {/* Language Toggle Button */}
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-xl border-2 border-brand-200 text-brand-600 font-black text-sm hover:bg-brand-50 transition-all hover:-translate-y-0.5"
                            title={lang === 'en' ? 'Switch to Bangla' : 'Switch to English'}
                        >
                            <Globe size={16} />
                            {lang === 'en' ? 'বাং' : 'EN'}
                        </button>

                        <Link to="/login" className="text-sm font-bold text-slate-600 hover:text-brand-600 transition-colors px-4 py-2">
                            {t('nav_login')}
                        </Link>
                        <Link to="/signup" className="btn-primary flex items-center gap-2 text-sm px-6 py-2.5">
                            {t('nav_signup')}
                            <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Mobile: Language Toggle + Hamburger */}
                    <div className="lg:hidden flex items-center gap-2">
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border-2 border-brand-200 text-brand-600 font-black text-xs hover:bg-brand-50 transition-all"
                        >
                            <Globe size={14} />
                            {lang === 'en' ? 'বাং' : 'EN'}
                        </button>
                        <button
                            className="p-2 text-slate-600 hover:text-brand-600 transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-full left-0 right-0 mt-4 px-6"
                    >
                        <div className="glass-card rounded-3xl p-8 space-y-6 shadow-2xl">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-xl font-black text-slate-800 hover:text-brand-600"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
                                <Link to="/login" onClick={() => setIsOpen(false)} className="block text-center text-lg font-bold text-slate-600 hover:text-brand-600">
                                    {t('nav_login')}
                                </Link>
                                <Link to="/signup" onClick={() => setIsOpen(false)} className="btn-primary text-center justify-center flex">
                                    {t('nav_signup')}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
