import { Outlet } from 'react-router-dom';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';

export const PublicLayout = () => (
  <>
    <Navbar />
    <main className="container py-4">
      <Outlet />
    </main>
    <Footer />
  </>
);
