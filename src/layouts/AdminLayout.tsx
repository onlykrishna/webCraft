import { Outlet } from 'react-router-dom';

export const AdminLayout = () => (
  <div className="container-fluid p-4">
    <h1>Admin Dashboard</h1>
    <Outlet />
  </div>
);
