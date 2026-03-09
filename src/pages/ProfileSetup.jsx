import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    User, ShieldCheck, CreditCard, Landmark,
    ArrowRight, MapPin, Camera, Phone, CheckCircle2
} from 'lucide-react';

const ProfileSetup = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        location: '',
        phone: '',
        paymentType: 'bkash',
        accountNumber: '',
        bankName: '',
        identityVerified: false
    });

    const nextStep = () => {
        if (step < 3) setStep(step + 1);
        else navigate('/dashboard/seeker'); // Assuming seeker for this mock flow
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-400/10 blur-[120px] rounded-full animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full animate-blob"></div>

            <div className="w-full max-w-xl relative z-10">
                {/* Progress Tracks */}
                <div className="flex gap-2 mb-12">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className={`h-2 flex-1 rounded-full transition-all duration-500 ${step >= i ? 'bg-brand-600' : 'bg-slate-200'}`}
                        />
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="glass-card bg-white p-10 rounded-[2.5rem] shadow-premium space-y-8"
                        >
                            <div className="text-center space-y-2">
                                <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-4 scale-110">
                                    <User size={32} />
                                </div>
                                <h1 className="text-2xl font-black text-slate-900">Basic Verification</h1>
                                <p className="text-slate-500 font-medium">To maintain a secure environment, we need some basic details.</p>
                            </div>

                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-700 ml-1">Current Location (City)</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <input
                                            type="text"
                                            placeholder="Dhaka, Bangladesh"
                                            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-500/10 outline-none font-medium"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-700 ml-1">Phone Number (For OTP)</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <input
                                            type="text"
                                            placeholder="019xxxxxxxx"
                                            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-500/10 outline-none font-medium"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button onClick={nextStep} className="w-full btn-primary flex items-center justify-center gap-2 py-4">
                                Continue Setup <ArrowRight size={20} />
                            </button>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="glass-card bg-white p-10 rounded-[2.5rem] shadow-premium space-y-8"
                        >
                            <div className="text-center space-y-2">
                                <div className="w-16 h-16 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 scale-110">
                                    <CreditCard size={32} />
                                </div>
                                <h1 className="text-2xl font-black text-slate-900">Payment Connection</h1>
                                <p className="text-slate-500 font-medium">Link your account to handle bKash and Bank transitions.</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setFormData({ ...formData, paymentType: 'bkash' })}
                                    className={`p-6 rounded-2xl border-2 transition-all text-center ${formData.paymentType === 'bkash' ? 'border-brand-500 bg-brand-50' : 'border-slate-100'}`}
                                >
                                    <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-black text-xs">bk</div>
                                    <p className="font-bold text-slate-900">bKash</p>
                                </button>
                                <button
                                    onClick={() => setFormData({ ...formData, paymentType: 'bank' })}
                                    className={`p-6 rounded-2xl border-2 transition-all text-center ${formData.paymentType === 'bank' ? 'border-brand-500 bg-brand-50' : 'border-slate-100'}`}
                                >
                                    <Landmark className="mx-auto mb-3 text-slate-400" size={32} />
                                    <p className="font-bold text-slate-900">Bank</p>
                                </button>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-slate-50">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-700 ml-1">Account / Phone Number</label>
                                <input
                                    type="text"
                                    placeholder={formData.paymentType === 'bkash' ? '017XXXXXXXX' : 'Bank Account Number'}
                                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium"
                                />
                            </div>

                            <button onClick={nextStep} className="w-full btn-primary flex items-center justify-center gap-2 py-4">
                                Confirm & Connect <ShieldCheck size={20} />
                            </button>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass-card bg-white p-10 rounded-[2.5rem] shadow-premium text-center space-y-8"
                        >
                            <div className="w-24 h-24 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                                <CheckCircle2 size={48} />
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-3xl font-black text-slate-900">Profile Secured!</h1>
                                <p className="text-slate-500 font-medium leading-relaxed">Your identity has been verified and your payment method is successfully connected. You are now 100% eligible for premium tasks.</p>
                            </div>

                            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center gap-4 text-left">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-600 shadow-sm shrink-0">
                                    <ShieldCheck size={24} />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verification Status</p>
                                    <p className="text-sm font-black text-slate-900">Premium High-Security Member</p>
                                </div>
                            </div>

                            <button onClick={nextStep} className="w-full btn-primary py-4">
                                Go to Dashboard
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ProfileSetup;
