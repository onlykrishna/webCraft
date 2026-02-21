import { Outlet } from 'react-router-dom';

export const ClientLayout = () => (
  <div className="container py-4">
    <h1>Client Portal</h1>
    <Outlet />
  </div>
);
