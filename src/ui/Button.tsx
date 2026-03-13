import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { useTheme } from '@/context/ThemeProvider';

type Variant = 'primary' | 'ghost' | 'outline';

type Props = PropsWithChildren & {
  variant?: Variant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, variant = 'primary', className = '', ...rest }: Props) => {
  const { theme } = useTheme();
  const base = 'btn';
  if (variant === 'ghost') return <button className={`${base} btn-link ${className}`} {...rest}>{children}</button>;
  if (variant === 'outline') return <button className={`${base} btn-outline-primary ${className}`} {...rest}>{children}</button>;
  return (
    <button
      className={`${base} ${className}`}
      style={{ backgroundImage: theme.colors.primaryGradient, color: '#fff', border: 'none' }}
      {...rest}
    >
      {children}
    </button>
  );
};export default Button;
