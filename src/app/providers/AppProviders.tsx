import { PropsWithChildren } from 'react';
import { AuthProvider } from '@/features/auth/hooks/useAuth';
import { ThemeProvider } from '@/context/ThemeProvider';

export const AppProviders = ({ children }: PropsWithChildren) => (
  <ThemeProvider>
    <AuthProvider>{children}</AuthProvider>
  </ThemeProvider>
);
