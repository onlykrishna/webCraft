import { Outlet } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';

export const PublicLayout = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);
