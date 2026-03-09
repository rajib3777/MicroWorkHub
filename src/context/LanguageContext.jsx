import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
    en: {
        // Navbar
        nav_home: 'Home',
        nav_find_jobs: 'Find Jobs',
        nav_post_job: 'Post a Job',
        nav_about: 'About Us',
        nav_login: 'Login',
        nav_signup: 'Sign Up',

        // Hero
        hero_badge: '100% Secured Escrow Jobs',
        hero_h1_line1: 'Complete',
        hero_h1_word1: 'Tasks',
        hero_h1_line2: 'Earn',
        hero_h1_word2: 'Money',
        hero_h1_line3: 'Grow',
        hero_h1_word3: 'Fast',
        hero_subtitle: 'The ultimate microservice platform in Bangladesh. Post a job securely or earn money completing quick online tasks.',
        hero_cta_earn: 'Start Earning Now',
        hero_cta_post: 'Post a Job',
        hero_rated: 'Rated 4.9/5 by 10,000+ Users',
        hero_payment_received: 'Payment Received',
        hero_task_approved: 'Task Approved',

        // How it Works
        hiw_title: 'How MicroWork',
        hiw_title_end: 'Hub Works',
        hiw_subtitle: 'A seamless and heavily secured platform ensuring you get what you pay for, or get paid for what you do.',
        hiw_step1_title: 'Post / Find Job',
        hiw_step1_desc: 'Employers post jobs with escrowed funds. Workers browse and select tasks.',
        hiw_step2_title: 'Complete Task',
        hiw_step2_desc: 'Workers complete the task and submit proof. The funds are securely held.',
        hiw_step3_title: 'Approve & Pay',
        hiw_step3_desc: 'Employer approves the proof and funds are instantly released to the worker.',

        // Featured Jobs
        featured_title: 'Featured Microjobs',
        featured_subtitle: 'Quick tasks you can complete right now to start earning money.',
        featured_view_all: 'View All Jobs',
        job_done: 'Done',

        // Top Workers
        workers_title: 'Top Performing',
        workers_title2: 'Workers',
        workers_subtitle: 'These freelancers are crushing it on our platform today.',
        workers_jobs: 'Jobs',
        workers_earned: 'Earned',

        // Testimonials
        testimonials_title: 'What Our Users Say',
        testimonials_subtitle: 'Hear from the people who use MicroWorkHub daily.',

        // CTA
        cta_title: 'Ready to Transform Your Workflow?',
        cta_subtitle: "Join 45,000+ users today. Whether you need a task done or want to earn free money, we've got you covered.",
        cta_btn: 'Create Free Account',

        // Footer
        footer_tagline: 'The premium platform for microservices and secure escrow-based jobs. Connect, work, and earn seamlessly.',
        footer_quick_links: 'Quick Links',
        footer_support: 'Support',
        footer_contact: 'Contact Us',
        footer_rights: '© 2026 MicroWorkHub. All rights reserved.',

        // Login
        login_title: 'Sign In',
        login_subtitle: 'Enter your credentials to access your account.',
        login_email: 'Email Address',
        login_password: 'Password',
        login_remember: 'Remember me',
        login_forgot: 'Forgot password?',
        login_btn: 'Login to Dashboard',
        login_no_account: "Don't have an account?",
        login_signup_link: 'Sign up',

        // Signup
        signup_title: 'Create Account',
        signup_subtitle: 'Join MicroWorkHub to get started.',
        signup_work: 'I want to Work',
        signup_hire: 'I want to Hire',
        signup_name: 'Full Name',
        signup_email: 'Email Address',
        signup_password: 'Password',
        signup_btn: 'Register Account',
        signup_have_account: 'Already have an account?',
        signup_login_link: 'Login',

        // Find Jobs
        findjobs_title: 'Find',
        findjobs_title2: 'Micro Jobs',
        findjobs_subtitle: 'Browse through hundreds of tasks. Complete them and earn money instantly.',
        findjobs_search_placeholder: 'Search tasks...',
        findjobs_accept: 'Accept Task',

        // Dashboard common
        dash_overview: 'Overview',
        dash_logout: 'Log Out',
        dash_settings: 'Settings',
        dash_spending: 'Spending Analytics',
        dash_total_spent: 'Total Spent',
        dash_active_jobs: 'Active Jobs',
        dash_completed: 'Completed Tasks',
        dash_pending_reviews: 'Pending Reviews',
        dash_earnings: 'Earnings Timeline',
        dash_total_earned: 'Total Earned',
        dash_jobs_done: 'Jobs Completed',
        dash_success_rate: 'Success Rate',
        dash_pending_wallet: 'Pending Wallet',
        dash_disputes: 'Disputes',
        dash_escrow: 'Escrow Finances',
        dash_myjobs: 'My Posted Jobs',
        dash_postnew: 'Post New Task',
        dash_hired: 'Hired Workers',
        dash_findwork: 'Find Work',
        dash_activetasks: 'Active Tasks',
        dash_earningswithdraw: 'Earnings & Withdraw',
        dash_employers: 'My Employers',
        dash_analytics: 'Platform Analytics',
        dash_manage_users: 'Manage Users',
        dash_alljobs: 'All Posted Jobs',
        dash_finances: 'Global Finances',
        dash_dispute_center: 'Dispute Center',
        posterDashboard: 'Employer',
        seekerDashboard: 'Freelancer',

        // About Us
        about_title: 'About Us',
        about_subtitle: 'MicroWorkHub - Where your skills and opportunities meet to create unprecedented possibilities.',
        about_mission_title: 'Our Mission',
        about_mission_desc: 'We want to create a platform that is safe, transparent, and profitable for everyone. Thousands of youths earn a guaranteed income from home through us.',
        about_vision_title: 'Our Vision',
        about_vision_desc: 'Our main goal is to set a new standard of trust and security in the micro-job world. We want every work to be evaluated properly.',
        about_stats_users: 'Active Users',
        about_stats_jobs: 'Completed Jobs',
        about_stats_paid: 'Total Paid out',
        about_team_title: 'Our Dedicated Team',
        about_team_subtitle: 'We believe that sincere effort and honesty are the keys to success.',
        about_cta: 'Join Us Today',

        // Home Extra
        home_stats_title: 'Platform Statistics',
        home_stats_users: 'Active Freelancers',
        home_stats_jobs: 'Completed Tasks',
        home_stats_paid: 'Total Paid Out',

        home_why_title: 'Why Choose Us?',
        home_why_subtitle: 'We provide the best tools for you to earn and hire securely.',
        home_why_1_title: 'Secure Payments',
        home_why_1_desc: 'All payments are held in escrow until the work is approved.',
        home_why_2_title: 'Instant Withdrawals',
        home_why_2_desc: 'Get your money fast through bKash or Bank transfers.',
        home_why_3_title: '24/7 Support',
        home_why_3_desc: 'Our dedicated team is always here to help you succeed.',

        // Support
        support_title: 'Contact Support',
        support_subtitle: 'Have questions or need help? Send us a message and we will get back to you soon.',
        support_name: 'Full Name',
        support_email: 'Email Address',
        support_message: 'Your Message',
        support_btn: 'Send Message',
        support_placeholder_name: 'Enter your name',
        support_placeholder_email: 'Enter your email',
        support_placeholder_msg: 'How can we help you?',
        support_success: 'Thank you! Your message has been sent.',
    },

    bn: {
        // Navbar
        nav_home: 'হোম',
        nav_find_jobs: 'কাজ খুঁজুন',
        nav_post_job: 'কাজ পোস্ট করুন',
        nav_about: 'আমাদের সম্পর্কে',
        nav_login: 'লগইন',
        nav_signup: 'সাইন আপ',

        // Hero
        hero_badge: '১০০% নিরাপদ এস্ক্রো কাজ',
        hero_h1_line1: 'কাজ',
        hero_h1_word1: 'সম্পন্ন করুন',
        hero_h1_line2: 'টাকা',
        hero_h1_word2: 'আয় করুন',
        hero_h1_line3: 'দ্রুত',
        hero_h1_word3: 'এগিয়ে যান',
        hero_subtitle: 'বাংলাদেশের সেরা মাইক্রোসার্ভিস প্ল্যাটফর্ম। নিরাপদে কাজ পোস্ট করুন বা ছোট ছোট কাজ করে টাকা আয় করুন।',
        hero_cta_earn: 'এখনই আয় শুরু করুন',
        hero_cta_post: 'কাজ পোস্ট করুন',
        hero_rated: '১০,০০০+ ব্যবহারকারী ৪.৯/৫ রেটিং দিয়েছে',
        hero_payment_received: 'পেমেন্ট পাওয়া গেছে',
        hero_task_approved: 'কাজ অনুমোদিত',

        // How it Works
        hiw_title: 'কীভাবে MicroWork',
        hiw_title_end: 'Hub কাজ করে',
        hiw_subtitle: 'একটি নিরাপদ ও স্বচ্ছ প্ল্যাটফর্ম যেখানে আপনি যা পে করবেন তা পাবেন, অথবা যা করবেন তার পেমেন্ট পাবেন।',
        hiw_step1_title: 'কাজ পোস্ট / খুঁজুন',
        hiw_step1_desc: 'নিয়োগকর্তারা এস্ক্রো ফান্ড সহ কাজ পোস্ট করেন। শ্রমিকরা কাজ ব্রাউজ করে নির্বাচন করে।',
        hiw_step2_title: 'কাজ সম্পন্ন করুন',
        hiw_step2_desc: 'শ্রমিকরা কাজ করে প্রমাণ জমা দেয়। ততক্ষণ পর্যন্ত ফান্ড নিরাপদে রাখা হয়।',
        hiw_step3_title: 'অনুমোদন ও পেমেন্ট',
        hiw_step3_desc: 'নিয়োগকর্তা প্রমাণ অনুমোদন করলেই ফান্ড শ্রমিকের কাছে চলে যায়।',

        // Featured Jobs
        featured_title: 'বিশেষ মাইক্রোজব',
        featured_subtitle: 'এখনই করা যায় এমন দ্রুত কাজ — টাকা আয় শুরু করুন।',
        featured_view_all: 'সব কাজ দেখুন',
        job_done: 'সম্পন্ন',

        // Top Workers
        workers_title: 'শীর্ষ পারফর্মিং',
        workers_title2: 'শ্রমিকগণ',
        workers_subtitle: 'এই ফ্রিল্যান্সাররা আজকে প্ল্যাটফর্মে দারুণ কাজ করছেন।',
        workers_jobs: 'কাজ',
        workers_earned: 'আয়',

        // Testimonials
        testimonials_title: 'ব্যবহারকারীরা কী বলছেন',
        testimonials_subtitle: 'যারা প্রতিদিন MicroWorkHub ব্যবহার করেন তাদের কথা শুনুন।',

        // CTA
        cta_title: 'আপনার কর্মপ্রবাহ বদলে দিতে প্রস্তুত?',
        cta_subtitle: 'আজই ৪৫,০০০+ ব্যবহারকারীর সাথে যোগ দিন। কাজ করান বা কাজ করুন — আমরা আপনার পাশে আছি।',
        cta_btn: 'বিনামূল্যে অ্যাকাউন্ট খুলুন',

        // Footer
        footer_tagline: 'মাইক্রোসার্ভিস ও নিরাপদ এস্ক্রো কাজের জন্য সেরা প্ল্যাটফর্ম। সংযুক্ত হোন, কাজ করুন, আয় করুন।',
        footer_quick_links: 'দ্রুত লিঙ্ক',
        footer_support: 'সহায়তা',
        footer_contact: 'যোগাযোগ',
        footer_rights: '© ২০২৬ MicroWorkHub. সর্বস্বত্ব সংরক্ষিত।',

        // Login
        login_title: 'সাইন ইন',
        login_subtitle: 'আপনার ড্যাশবোর্ডে প্রবেশ করতে লগইন করুন।',
        login_email: 'ইমেইল ঠিকানা',
        login_password: 'পাসওয়ার্ড',
        login_remember: 'মনে রাখুন',
        login_forgot: 'পাসওয়ার্ড ভুলে গেছেন?',
        login_btn: 'ড্যাশবোর্ডে লগইন করুন',
        login_no_account: 'অ্যাকাউন্ট নেই?',
        login_signup_link: 'সাইন আপ করুন',

        // Signup
        signup_title: 'অ্যাকাউন্ট তৈরি করুন',
        signup_subtitle: 'MicroWorkHub-এ যোগ দিতে রেজিস্ট্রেশন করুন।',
        signup_work: 'আমি কাজ করতে চাই',
        signup_hire: 'আমি কাজ দিতে চাই',
        signup_name: 'পূর্ণ নাম',
        signup_email: 'ইমেইল ঠিকানা',
        signup_password: 'পাসওয়ার্ড',
        signup_btn: 'অ্যাকাউন্ট রেজিস্ট্রেশন করুন',
        signup_have_account: 'ইতিমধ্যে অ্যাকাউন্ট আছে?',
        signup_login_link: 'লগইন করুন',

        // Find Jobs
        findjobs_title: 'মাইক্রো',
        findjobs_title2: 'কাজ খুঁজুন',
        findjobs_subtitle: 'শত শত কাজের মধ্যে থেকে বেছে নিন। সম্পন্ন করুন এবং তাৎক্ষণিক টাকা আয় করুন।',
        findjobs_search_placeholder: 'কাজ খুঁজুন...',
        findjobs_accept: 'কাজটি গ্রহণ করুন',

        // Dashboard common
        dash_overview: 'সংক্ষিপ্ত বিবরণ',
        dash_logout: 'লগ আউট',
        dash_settings: 'সেটিংস',
        dash_spending: 'ব্যয়ের বিশ্লেষণ',
        dash_total_spent: 'মোট ব্যয়',
        dash_active_jobs: 'সক্রিয় কাজ',
        dash_completed: 'সম্পন্ন কাজ',
        dash_pending_reviews: 'পর্যালোচনা বাকি',
        dash_earnings: 'আয়ের টাইমলাইন',
        dash_total_earned: 'মোট আয়',
        dash_jobs_done: 'সম্পন্ন কাজ',
        dash_success_rate: 'সাফল্যের হার',
        dash_pending_wallet: 'মুলতুবি ওয়ালেট',
        dash_disputes: 'বিবাদ',
        dash_escrow: 'এস্ক্রো অর্থ',
        dash_myjobs: 'আমার পোস্ট করা কাজ',
        dash_postnew: 'নতুন কাজ পোস্ট করুন',
        dash_hired: 'নিযুক্ত শ্রমিক',
        dash_findwork: 'কাজ খুঁজুন',
        dash_activetasks: 'সক্রিয় কাজ',
        dash_earningswithdraw: 'আয় ও উত্তোলন',
        dash_employers: 'আমার নিয়োগকর্তা',
        dash_analytics: 'প্ল্যাটফর্ম বিশ্লেষণ',
        dash_manage_users: 'ব্যবহারকারী পরিচালনা',
        dash_alljobs: 'সব পোস্ট করা কাজ',
        dash_finances: 'সামগ্রিক অর্থায়ন',
        dash_dispute_center: 'বিবাদ কেন্দ্র',
        posterDashboard: 'নিয়োগকর্তা',
        seekerDashboard: 'ফ্রিল্যান্সার',

        // About Us
        about_title: 'আমাদের সম্পর্কে',
        about_subtitle: 'MicroWorkHub - যেখানে আপনার দক্ষতা আর সুযোগ মিলে এক অভূতপূর্ব সম্ভাবনার জন্ম দেয়।',
        about_mission_title: 'আমাদের লক্ষ্য',
        about_mission_desc: 'আমরা এমন একটি প্ল্যাটফর্ম তৈরি করতে চাই যা সবার জন্য নিরাপদ, স্বচ্ছ এবং লাভজনক। আমাদের মাধ্যমে ঘরে বসেই নিশ্চিত আয়ের সুযোগ পান হাজারো তরুণ।',
        about_vision_title: 'আমাদের দৃষ্টিভঙ্গি',
        about_vision_desc: 'মাইক্রো-জবের দুনিয়ায় বিশ্বাস এবং নিরাপত্তার এক নতুন মানদণ্ড তৈরি করাই আমাদের মূল উদ্দেশ্য। আমরা চাই প্রতিটি কাজের সঠিক মূল্যায়ন হোক।',
        about_stats_users: 'সক্রিয় ব্যবহারকারী',
        about_stats_jobs: 'সম্পন্ন কাজ',
        about_stats_paid: 'মোট প্রদান করা হয়েছে',
        about_team_title: 'আমাদের ডেডিকেটেড টিম',
        about_team_subtitle: 'আমরা বিশ্বাস করি ঐকান্তিক প্রচেষ্টা এবং সততাই সফলতার চাবিকাঠি।',
        about_cta: 'আজই আমাদের সাথে যোগ দিন',

        // Home Extra
        home_stats_title: 'প্ল্যাটফর্ম পরিসংখ্যান',
        home_stats_users: 'সক্রিয় ফ্রিল্যান্সার',
        home_stats_jobs: 'সম্পন্ন কাজ',
        home_stats_paid: 'মোট প্রদান করা হয়েছে',

        home_why_title: 'আমাদের কেন বেছে নেবেন?',
        home_why_subtitle: 'নিরাপদে আয় এবং নিয়োগের জন্য আমরা সেরা টুল প্রদান করি।',
        home_why_1_title: 'নিরাপদ পেমেন্ট',
        home_why_1_desc: 'কাজ অনুমোদিত না হওয়া পর্যন্ত সমস্ত পেমেন্ট এস্ক্রোতে আটকে থাকে।',
        home_why_2_title: 'তাৎক্ষণিক উত্তোলন',
        home_why_2_desc: 'বিকাশ বা ব্যাংক ট্রান্সফারের মাধ্যমে দ্রুত আপনার টাকা পান।',
        home_why_3_title: '২৪/৭ সাপোর্ট',
        home_why_3_desc: 'আপনাকে সফল করতে আমাদের ডেডিকেটেড টিম সবসময় প্রস্তুত।',

        // Support
        support_title: 'সাপোর্ট যোগাযোগ',
        support_subtitle: 'প্রশ্ন আছে বা সাহায্য প্রয়োজন? আমাদের একটি বার্তা পাঠান এবং আমরা দ্রুত আপনার সাথে যোগাযোগ করব।',
        support_name: 'পূর্ণ নাম',
        support_email: 'ইমেইল ঠিকানা',
        support_message: 'আপনার বার্তা',
        support_btn: 'বার্তা পাঠান',
        support_placeholder_name: 'আপনার নাম লিখুন',
        support_placeholder_email: 'আপনার ইমেইল লিখুন',
        support_placeholder_msg: 'আমরা কীভাবে আপনাকে সাহায্য করতে পারি?',
        support_success: 'ধন্যবাদ! আপনার বার্তা পাঠানো হয়েছে।',
    }
};

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('en');
    const t = (key) => translations[lang][key] || key;
    const toggleLang = () => setLang(prev => prev === 'en' ? 'bn' : 'en');
    return (
        <LanguageContext.Provider value={{ lang, t, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLang = () => useContext(LanguageContext);
