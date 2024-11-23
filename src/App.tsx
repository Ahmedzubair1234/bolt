import { Sidebar } from '@/components/layout/Sidebar';
import { RightSidebar } from '@/components/layout/RightSidebar';
import { Header } from '@/components/layout/Header';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Departments } from '@/components/sections/Departments';
import { Services } from '@/components/sections/Services';
import { Doctors } from '@/components/sections/Doctors';
import { Appointment } from '@/components/sections/Appointment';
import { ThemeProvider } from '@/components/theme-provider';
import { PatientDashboard } from '@/components/dashboard/PatientDashboard';
import { AdminDashboard } from '@/components/dashboard/AdminDashboard';
import { useState } from 'react';

export default function App() {
  // For demo purposes, we'll use a simple state to toggle between dashboards
  // In a real app, this would come from an auth context
  const [userRole, setUserRole] = useState<'patient' | 'admin' | null>(null);

  if (userRole === 'patient') {
    return (
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-background">
          <Sidebar />
          <RightSidebar />
          <Header />
          <main className="ml-16 mr-16 mt-14">
            <PatientDashboard />
          </main>
        </div>
      </ThemeProvider>
    );
  }

  if (userRole === 'admin') {
    return (
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-background">
          <Sidebar />
          <RightSidebar />
          <Header />
          <main className="ml-16 mr-16 mt-14">
            <AdminDashboard />
          </main>
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <Sidebar />
        <RightSidebar />
        <Header />
        <main className="ml-16 mr-16 mt-14">
          <Hero />
          <About />
          <Departments />
          <Services />
          <Doctors />
          <Appointment />
        </main>
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}