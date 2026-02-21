import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/navigation/Footer';
import { Navbar } from '@/components/navigation/Navbar';

export const PublicLayout = () => (
  <>
    <Navbar />
    <main className="container py-4">
      <Outlet />
    </main>
    <Footer />
  </>
);
