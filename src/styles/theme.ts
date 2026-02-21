export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 32,
  xl: 48,
  section: 96, // default section vertical rhythm
};

export const radius = {
  sm: 8,
  base: 16,
  lg: 24,
  xl: 32,
  pill: 9999,
};

export const typography = {
  h1: '48px',
  h2: '32px',
  h3: '22px',
  lead: '18px',
  body: '16px',
};

export const shadows = {
  level1: '0 6px 20px rgba(15,23,42,0.06)',
  level2: '0 12px 40px rgba(15,23,42,0.08)',
  softGlow: '0 20px 60px rgba(99,102,241,0.08)',
};

export const colors = {
  neutralBg: '#0f1723',
  surfaceLight: '#ffffff',
  surfaceElevated: 'rgba(255,255,255,0.6)',
  textPrimary: '#0f172a',
  textMuted: '#6b7280',
  primaryGradient: 'linear-gradient(90deg,#7c3aed,#06b6d4)',
  accent: '#7c3aed',
  accent2: '#06b6d4',
  glass: 'rgba(255,255,255,0.06)',
};

export type ThemeTokens = typeof colors & { spacing: typeof spacing; radius: typeof radius; typography: typeof typography; shadows: typeof shadows };

export const theme: ThemeTokens = {
  ...colors,
  spacing,
  radius,
  typography,
  shadows,
};

export default theme;
