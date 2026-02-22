import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';
import theme from '@/styles/theme';
import '@/styles/global.css';

type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  mode: ThemeMode;
  toggle: () => void;
  setMode: (mode: ThemeMode) => void;
  theme: typeof theme;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/* ===============================
   HELPER — GET INITIAL MODE
================================ */

const getInitialMode = (): ThemeMode => {
  if (typeof window === 'undefined') return 'light';

  const stored = localStorage.getItem('wc:theme') as ThemeMode | null;
  if (stored) return stored;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

/* ===============================
   PROVIDER
================================ */

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode);

  /* ===============================
     APPLY THEME BEFORE PAINT
  ================================= */

  useLayoutEffect(() => {
    const root = document.documentElement;

    root.dataset.theme = mode;
    document.body.classList.toggle('theme-dark', mode === 'dark');
  }, [mode]);

  /* ===============================
     PERSIST
  ================================= */

  useEffect(() => {
    localStorage.setItem('wc:theme', mode);
  }, [mode]);

  /* ===============================
     TOGGLE
  ================================= */

  const toggle = () => setMode((m) => (m === 'light' ? 'dark' : 'light'));

  const value: ThemeContextValue = {
    mode,
    toggle,
    setMode,
    theme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

/* ===============================
   HOOK
================================ */

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
};

export default ThemeProvider;