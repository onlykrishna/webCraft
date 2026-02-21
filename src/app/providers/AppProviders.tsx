import { PropsWithChildren } from 'react';
import { AuthProvider } from '@/features/auth/hooks/useAuth';
import ThemeProvider from '@/context/ThemeProvider';
import ToastProvider from '@/ui/toast/ToastProvider';

export const AppProviders = ({ children }: PropsWithChildren) => (
	<ThemeProvider>
		<ToastProvider>
			<AuthProvider>{children}</AuthProvider>
		</ToastProvider>
	</ThemeProvider>
);
