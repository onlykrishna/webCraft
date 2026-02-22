/* ========================================
   WEBCRAFT PREMIUM DARK SAAS THEME
   ======================================== */

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 32,
  xl: 48,
  section: 110, // more breathing room (SaaS feel)
};

export const radius = {
  sm: 10,
  base: 18,
  lg: 26,
  xl: 36,
  pill: 9999,
};

export const typography = {
  h1: '56px',
  h2: '38px',
  h3: '24px',
  lead: '19px',
  body: '16px',
};

export const shadows = {
  level1: '0 10px 40px rgba(2,8,23,.35)',
  level2: '0 20px 80px rgba(2,8,23,.45)',
  softGlow: '0 0 60px rgba(34,211,238,.15)',
  cyanGlow: '0 0 120px rgba(34,211,238,.12)',
};

/* ========================================
   COLORS (REFERENCE MATCH)
   ======================================== */

export const colors = {
  /* BASE */
  neutralBg: '#050B18',
  neutralBg2: '#071226',

  /* SURFACE */
  surfaceLight: '#0c172d',
  surfaceElevated: '#0f1f3d',

  /* TEXT */
  textPrimary: '#e6f1ff',
  textMuted: '#8ea3c2',

  /* BRAND */
  primary: '#22d3ee',
  secondary: '#34d399',

  /* GRADIENTS */
  primaryGradient: 'linear-gradient(90deg,#22d3ee,#34d399)',
  accentGradient: 'linear-gradient(120deg,#22d3ee,#3b82f6)',
  glowGradient: 'radial-gradient(circle at center,rgba(34,211,238,.25),transparent 70%)',

  /* GLASS */
  glass: 'rgba(255,255,255,.04)',
  glassBorder: 'rgba(255,255,255,.06)',

  /* GRID */
  grid: 'rgba(34,211,238,.06)',
};

/* ========================================
   THEME OBJECT
   ======================================== */

export type ThemeTokens = typeof colors & {
  spacing: typeof spacing;
  radius: typeof radius;
  typography: typeof typography;
  shadows: typeof shadows;
};

export const theme: ThemeTokens = {
  ...colors,
  spacing,
  radius,
  typography,
  shadows,
};

export default theme;
