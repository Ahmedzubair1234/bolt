import { Sidebar } from '@/components/layout/Sidebar';
import { RightSidebar } from '@/components/layout/RightSidebar';
import { Header } from '@/components/layout/Header';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { Hero } from '@/components/sections/Hero';
import { Departments } from '@/components/sections/Departments';
import { Services } from '@/components/sections/Services';
import { Doctors } from '@/components/sections/Doctors';
import { Appointment } from '@/components/sections/Appointment';
import { ThemeProvider } from '@/components/theme-provider';

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <Sidebar />
        <RightSidebar />
        <Header />
        <main className="ml-16 mr-16 mt-14">
          <Hero />
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