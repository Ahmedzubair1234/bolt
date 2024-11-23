import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About Us',
        appointment: 'Book Appointment',
        contact: 'Contact',
        departments: 'Departments',
        doctors: 'Find a Doctor',
        services: 'Services',
        results: 'Test Results',
        dashboard: 'Dashboard',
      },
      common: {
        open: 'Open Today',
        closed: 'Closed',
        login: 'Login',
        register: 'Register',
        theme: {
          light: 'Light Mode',
          dark: 'Dark Mode',
        },
      },
      auth: {
        loginTitle: 'Welcome Back',
        registerTitle: 'Create Account',
        email: 'Email',
        password: 'Password',
        name: 'Full Name',
        phone: 'Phone Number',
        noAccount: 'Don\'t have an account?',
        hasAccount: 'Already have an account?',
        signIn: 'Sign In',
        signUp: 'Sign Up',
      },
      about: {
        title: 'About Amin Diagnostics',
        description: 'Founded in 1970, Amin Diagnostics has been at the forefront of medical diagnostics, providing cutting-edge healthcare solutions to our community for over 50 years.',
        facilities: 'State-of-the-Art Facilities',
        facilitiesDesc: 'Equipped with the latest medical technology and diagnostic tools',
        team: 'Expert Medical Team',
        teamDesc: 'Highly qualified doctors and medical professionals',
        results: 'Quick Results',
        resultsDesc: 'Fast and accurate diagnostic results',
        years: 'Years of Excellence',
        learnMore: 'Learn More',
      },
    },
  },
  bn: {
    translation: {
      nav: {
        home: 'হোম',
        about: 'আমাদের সম্পর্কে',
        appointment: 'অ্যাপয়েন্টমেন্ট বুক করুন',
        contact: 'যোগাযোগ',
        departments: 'বিভাগসমূহ',
        doctors: 'ডাক্তার খুঁজুন',
        services: 'সেবাসমূহ',
        results: 'টেস্ট রেজাল্ট',
        dashboard: 'ড্যাশবোর্ড',
      },
      common: {
        open: 'আজ খোলা আছে',
        closed: 'বন্ধ',
        login: 'লগইন',
        register: 'নিবন্ধন',
        theme: {
          light: 'লাইট মোড',
          dark: 'ডার্ক মোড',
        },
      },
      auth: {
        loginTitle: 'স্বাগতম',
        registerTitle: 'নতুন অ্যাকাউন্ট তৈরি করুন',
        email: 'ইমেইল',
        password: 'পাসওয়ার্ড',
        name: 'পূর্ণ নাম',
        phone: 'ফোন নম্বর',
        noAccount: 'অ্যাকাউন্ট নেই?',
        hasAccount: 'অ্যাকাউন্ট আছে?',
        signIn: 'সাইন ইন',
        signUp: 'সাইন আপ',
      },
      about: {
        title: 'আমিন ডায়াগনস্টিকস সম্পর্কে',
        description: '১৯৭০ সালে প্রতিষ্ঠিত, আমিন ডায়াগনস্টিকস ৫০ বছরেরও বেশি সময় ধরে আমাদের সম্প্রদায়কে অত্যাধুনিক স্বাস্থ্যসেবা সমাধান প্রদান করে আসছে।',
        facilities: 'অত্যাধুনিক সুবিধা',
        facilitiesDesc: 'সর্বশেষ মেডিকেল প্রযুক্তি এবং ডায়াগনস্টিক টুলস দ্বারা সজ্জিত',
        team: 'বিশেষজ্ঞ চিকিৎসক দল',
        teamDesc: 'অত্যন্ত যোগ্য ডাক্তার এবং মেডিকেল পেশাদার',
        results: 'দ্রুত ফলাফল',
        resultsDesc: 'দ্রুত এবং নির্ভুল ডায়াগনস্টিক ফলাফল',
        years: 'বছরের শ্রেষ্ঠত্ব',
        learnMore: 'আরও জানুন',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;