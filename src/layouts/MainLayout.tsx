import { PropsWithChildren } from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { ScrollToTop } from '@/components/utils/ScrollToTop';
import { PageTransition } from '@/components/utils/PageTransition';

export const MainLayout = ({ children }: PropsWithChildren) => (
  <>
    <ScrollToTop />
    <Navbar />
    <PageTransition>
      <main className="container py-4">{children}</main>
    </PageTransition>
    <Footer />
  </>
);