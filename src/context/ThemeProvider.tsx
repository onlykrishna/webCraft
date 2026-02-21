import React, { createContext, useContext, useEffect, useState } from 'react';
import theme from '@/styles/theme';
import '@/styles/global.css';

type ThemeMode = 'light' | 'dark';
interface ThemeContextValue {
  mode: ThemeMode;
  toggle: () => void;
  theme: typeof theme;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(() => (localStorage.getItem('wc:theme') as ThemeMode) || 'light');

  useEffect(() => {
    document.body.classList.toggle('theme-dark', mode === 'dark');
    localStorage.setItem('wc:theme', mode);
  }, [mode]);

  const value: ThemeContextValue = {
    mode,
    toggle: () => setMode((m) => (m === 'light' ? 'dark' : 'light')),
    theme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
};

export default ThemeProvider;
