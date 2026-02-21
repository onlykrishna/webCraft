import React from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import ScrollToTop from '@/components/utils/ScrollToTop';
import PageTransition from '@/components/utils/PageTransition';
import StickyCTA from '@/ui/StickyCTA';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="app-root d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <ScrollToTop />
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default MainLayout;
