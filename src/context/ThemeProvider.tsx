import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';
import { Theme, themeDark, themeLight, ThemeMode } from '@/styles/theme';

type ThemeContextValue = {
  theme: Theme;
  mode: ThemeMode;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<ThemeMode>('light');
  const theme = mode === 'light' ? themeLight : themeDark;

  useEffect(() => {
    const next = mode === 'light' ? 'theme-light' : 'theme-dark';
    const prev = mode === 'light' ? 'theme-dark' : 'theme-light';
    document.body.classList.remove(prev);
    document.body.classList.add(next);
  }, [mode]);

  const value = useMemo(
    () => ({ theme, mode, toggle: () => setMode((m) => (m === 'light' ? 'dark' : 'light')) }),
    [theme, mode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};