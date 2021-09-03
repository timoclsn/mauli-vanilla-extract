import { createGlobalTheme } from '@vanilla-extract/css';
import { gray, indigo } from '@radix-ui/colors';

export const vars = createGlobalTheme(':root', {
    fonts: {
        sans: 'Inter, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
    },
    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem'
    },
    lineHeights: {
        xs: '1',
        sm: '1.25',
        md: '1.5',
        lg: '1.75',
        xl: '2',
        '2xl': '2.25',
        '3xl': '2.5',
        '4xl': '2.75',
        '5xl': '3'
    },
    fontWeights: {
        normal: '400',
        bold: '700'
    },
    space: {
        none: '0',
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '4rem',
        '3xl': '8rem'
    },
    sizes: {
        full: '100%'
    },
    radii: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '4rem',
        '3xl': '8rem',
        round: '9999px'
    },
    contentWidth: {
        xs: '480px',
        sm: '600px',
        md: '740px',
        lg: '1350px'
    },
    colors: {
        ...gray,
        ...indigo
    }
});
