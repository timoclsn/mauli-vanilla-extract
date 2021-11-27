import { gray, indigo } from '@radix-ui/colors';

export type Breakpoint = keyof typeof breakpoints;

export const breakpoints = {
  '640px': '640px',
  '768px': '768px',
  '1024px': '1024px',
  '1280px': '1280px',
} as const;

export const fonts = {
  sans: 'Inter, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
} as const;

export const fontSizes = {
  '12px': {
    fontSize: 12,
    lineHeight: 16,
  },
  '14px': {
    fontSize: 14,
    lineHeight: 20,
  },
  '16px': {
    fontSize: 16,
    lineHeight: 24,
  },
  '18px': {
    fontSize: 18,
    lineHeight: 28,
  },
  '20px': {
    fontSize: 20,
    lineHeight: 28,
  },
  '24px': {
    fontSize: 24,
    lineHeight: 32,
  },
  '30px': {
    fontSize: 30,
    lineHeight: 36,
  },
  '36px': {
    fontSize: 36,
    lineHeight: 40,
  },
  '48px': {
    fontSize: 48,
    lineHeight: 48,
  },
  '60px': {
    fontSize: 60,
    lineHeight: 60,
  },
} as const;

export const fontWeights = {
  normal: '400',
  bold: '700',
} as const;

export const space = {
  '1x': '8px',
  '2x': '16px',
  '3x': '24px',
  '4x': '32px',
  '5x': '40px',
  '6x': '48px',
  '7x': '56px',
  '8x': '64px',
  '9x': '72px',
} as const;

export const sizes = {
  '1/2': '50%',
  '1/3': '33.333%',
  '2/3': '66.666%',
  '1/4': '25%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  full: '100%',
} as const;

export const radii = {
  '1x': '8px',
  '2x': '16px',
  '3x': '24px',
  '4x': '32px',
  round: '9999px',
} as const;

export const contentWidth = {
  '320px': '320px',
  '640px': '640px',
  '768px': '768px',
  '1024px': '1024px',
  '1280px': '1280px',
} as const;

export type Color = keyof typeof colors;

export const colors = {
  ...gray,
  ...indigo,
} as const;

export const shadows = {
  low: '0.3px 0.5px 0.7px hsl( 0deg 0% 63% / 0.34), 0.4px 0.8px 1px -1.2px hsl( 0deg 0% 63% / 0.34), 1px 2px 2.5px -2.5px hsl( 0deg 0% 63% / 0.34)',
  medium:
    '0.3px 0.5px 0.7px hsl( 0deg 0% 63% / 0.36), 0.8px 1.6px 2px -0.8px hsl( 0deg 0% 63% / 0.36), 2.1px 4.1px 5.2px -1.7px hsl( 0deg 0% 63% / 0.36), 5px 10px 12.6px -2.5px hsl( 0deg 0% 63% / 0.36)',
  high: '0.3px 0.5px 0.7px hsl( 0deg 0% 63% / 0.34), 1.5px 2.9px 3.7px -0.4px hsl( 0deg 0% 63% / 0.34), 2.7px 5.4px 6.8px -0.7px hsl( 0deg 0% 63% / 0.34), 4.5px 8.9px 11.2px -1.1px hsl( 0deg 0% 63% / 0.34), 7.1px 14.3px 18px -1.4px hsl( 0deg 0% 63% / 0.34), 11.2px 22.3px 28.1px -1.8px hsl( 0deg 0% 63% / 0.34), 17px 33.9px 42.7px -2.1px hsl( 0deg 0% 63% / 0.34), 25px 50px 62.9px -2.5px hsl( 0deg 0% 63% / 0.34)',
} as const;
