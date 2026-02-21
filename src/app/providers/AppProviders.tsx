import { PropsWithChildren } from 'react';
import { AuthProvider } from '@/features/auth/hooks/useAuth';

export const AppProviders = ({ children }: PropsWithChildren) => <AuthProvider>{children}</AuthProvider>;
