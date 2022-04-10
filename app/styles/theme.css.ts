import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    accent: {
      1: '#FAFAFA',
      2: '#EAEAEA',
      7: '#333',
    },
    success: '#0070f3',
    cyan: '#79FFE1',
    gray: {
      100: '#f7fafc',
      200: '#edf2f7',
      400: '#cbd5e0',
      500: '#a0aec0',
    },
  },
  fontSizes: {
    xs: '.75rem',
    sm: '.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
    '8xl': '6.25rem',
  },
  opacity: {
    bg: '1',
    border: '1',
  },
  viewport: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xl2: '1536px',
  },
  size: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
  },
  width: {
    '2xl': '42rem',
  },
});

export const mediaQueries = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  xl2: '(min-width: 1536px)',
};
