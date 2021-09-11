import { createGlobalTheme } from '@vanilla-extract/css';
import { gray, indigo } from '@radix-ui/colors';
import { precomputeValues } from '@capsizecss/core';

const fontMetrics = {
    capHeight: 2048,
    ascent: 2728,
    descent: -680,
    lineGap: 0,
    unitsPerEm: 2816
};

export const vars = createGlobalTheme(':root', {
    fonts: {
        sans: 'Inter, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
    },
    fontSizes: {
        xs: precomputeValues({
            fontSize: 12,
            fontMetrics
        }),
        sm: precomputeValues({
            fontSize: 14,
            fontMetrics
        }),
        md: precomputeValues({
            fontSize: 16,
            fontMetrics
        }),
        lg: precomputeValues({
            fontSize: 18,
            fontMetrics
        }),
        xl: precomputeValues({
            fontSize: 20,
            fontMetrics
        }),
        '2xl': precomputeValues({
            fontSize: 24,
            fontMetrics
        }),
        '3xl': precomputeValues({
            fontSize: 48,
            fontMetrics
        })
    },
    lineHeights: {
        xs: '1',
        sm: '1.25',
        md: '1.5',
        lg: '1.75',
        xl: '2'
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
