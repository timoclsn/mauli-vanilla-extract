import { createGlobalTheme } from '@vanilla-extract/css';
import { gray, indigo } from '@radix-ui/colors';
import { precomputeValues } from '@capsizecss/core';
import fontMetrics from '@capsizecss/metrics/inter';

const grid = 8;
const baseline = 4;

const px = (value: number) => `${value}px`;

export const vars = createGlobalTheme(':root', {
    fonts: {
        sans: 'Inter, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
    },
    fontSizes: {
        '16px': precomputeValues({
            fontSize: 16,
            leading: baseline * 6,
            fontMetrics
        }),
        '32px': precomputeValues({
            fontSize: 32,
            leading: baseline * 10,
            fontMetrics
        }),
        '48px': precomputeValues({
            fontSize: 48,
            leading: baseline * 12,
            fontMetrics
        })
    },
    fontWeights: {
        normal: '400',
        bold: '700'
    },
    space: {
        '1x': px(1 * grid),
        '2x': px(2 * grid),
        '3x': px(3 * grid),
        '4x': px(4 * grid),
        '5x': px(5 * grid),
        '6x': px(6 * grid),
        '7x': px(7 * grid),
        '8x': px(8 * grid),
        '9x': px(9 * grid)
    },
    sizes: {
        full: '100%'
    },
    radii: {
        '1x': px(1 * grid),
        '2x': px(2 * grid),
        '3x': px(3 * grid),
        '4x': px(4 * grid),
        round: '9999px'
    },
    contentWidth: {
        '320px': px(320),
        '640px': px(640),
        '768px': px(768),
        '1024px': px(1024),
        '1280px': px(1280)
    },
    colors: {
        ...gray,
        ...indigo
    }
});
