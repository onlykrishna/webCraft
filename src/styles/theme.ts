export type ThemeMode = 'light' | 'dark';

export type Theme = {
  mode: ThemeMode;
  colors: {
    primaryGradient: string;
    surface: string;
    elevated: string;
    textPrimary: string;
    textMuted: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  radius: {
    sm: number;
    md: number;
    lg: number;
  };
};

const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 };
const radius = { sm: 6, md: 12, lg: 20 };

export const themeLight: Theme = {
  mode: 'light',
  colors: {
    primaryGradient: 'linear-gradient(90deg,#6f42c1,#0d6efd)',
    surface: '#ffffff',
    elevated: '#f8f9fa',
    textPrimary: '#111111',
    textMuted: '#6c757d'
  },
  spacing,
  radius
};

export const themeDark: Theme = {
  mode: 'dark',
  colors: {
    primaryGradient: 'linear-gradient(90deg,#8b5cf6,#22d3ee)',
    surface: '#0f1115',
    elevated: '#151922',
    textPrimary: '#e8eaed',
    textMuted: '#8a8f98'
  },
  spacing,
  radius
};