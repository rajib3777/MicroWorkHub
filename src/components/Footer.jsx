import React from 'react';
import { Briefcase, Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLang();

    return (
        <footer className="bg-slate-900 pt-24 pb-12 text-slate-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-gradient-to-tr from-brand-600 to-cyan-400 p-2 rounded-xl text-white shadow-lg">
                                <Briefcase size={24} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-black tracking-tighter text-white leading-none">MicroWork<span className="text-cyan-400">Hub</span></span>
                            </div>
                        </div>
                        <p className="text-slate-400 font-medium leading-relaxed">
                            {t('footer_tagline')}
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-black text-lg mb-6">{t('footer_quick_links')}</h4>
                        <ul className="space-y-4 font-medium text-slate-400">
                            {[t('nav_find_jobs'), t('nav_post_job'), t('workers_title2'), 'Pricing & Fees', t('nav_about')].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group">
                                        <span className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-black text-lg mb-6">{t('footer_support')}</h4>
                        <ul className="space-y-4 font-medium text-slate-400">
                            {['Help Center', 'Dispute Resolution', 'Terms of Service', 'Privacy Policy', 'Trust & Safety'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group">
                                        <span className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-black text-lg mb-6">{t('footer_contact')}</h4>
                        <ul className="space-y-6 font-medium text-slate-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-cyan-400 shrink-0 mt-1" />
                                <span className="capitalize">house-4, east shewrapara,<br />mirpur , dhaka</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-cyan-400 shrink-0" />
                                <span>019xxxxxxxx</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-cyan-400 shrink-0" />
                                <span>support@microworkhub.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-slate-500">
                    <p>{t('footer_rights')}</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
