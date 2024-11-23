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