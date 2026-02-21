import { Navigate, Outlet } from 'react-router-dom';
import { Loader } from '@/components/ui/Loader';
import { useAuth } from '@/features/auth/hooks/useAuth';

export const ProtectedRoute = () => {
  const { user, loading, isAdmin } = useAuth();

  if (loading) return <Loader />;
  if (!user || !isAdmin) return <Navigate to="/admin" replace />;

  return <Outlet />;
};
