import { createTheme } from '@vanilla-extract/css';
import { gray, indigo } from '@radix-ui/colors';

export type FontSizes = keyof typeof fontSizes;
const fontSizes = {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem'
} as const;

export type FontWeights = keyof typeof fontWeights;
const fontWeights = {
    normal: '400',
    bold: '700'
} as const;

export type LineHeights = keyof typeof lineHeights;
const lineHeights = {
    xs: '1',
    sm: '1.25',
    md: '1.5',
    lg: '1.75',
    xl: '2',
    '2xl': '2.25',
    '3xl': '2.5',
    '4xl': '2.75',
    '5xl': '3'
} as const;

export type Space = keyof typeof space;
const space = {
    none: '0',
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '4rem',
    '3xl': '8rem'
} as const;

export type Sizes = keyof typeof sizes;
const sizes = {
    full: '100%'
} as const;

export type Radii = keyof typeof radii;
const radii = {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '4rem',
    '3xl': '8rem',
    round: '9999px'
} as const;

export type ContentWidth = keyof typeof contentWidth;
const contentWidth = {
    xs: '480px',
    sm: '600px',
    md: '740px',
    lg: '1350px'
} as const;

export const [themeClass, vars] = createTheme({
    fonts: {
        sans: 'Inter, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
    },
    fontSizes: fontSizes,
    lineHeights: lineHeights,
    fontWeights: fontWeights,
    space: space,
    sizes: sizes,
    radii: radii,
    contentWidth: contentWidth,
    colors: {
        ...gray,
        ...indigo
    }
});
