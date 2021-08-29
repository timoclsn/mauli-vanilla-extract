import { gray, indigo } from '@radix-ui/colors';

import {
    ConditionalValue,
    createAtomicStyles,
    createAtomsFn,
    createMapValueFn
} from '@vanilla-extract/sprinkles';

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

const sizes = {
    full: '100%'
} as const;

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

const contentWidth = {
    xsmall: '480px',
    small: '600px',
    standard: '740px',
    large: '1350px'
} as const;

const responsiveStyles = createAtomicStyles({
    conditions: {
        mobile: {},
        tablet: { '@media': 'screen and (min-width: 768px)' },
        desktop: { '@media': 'screen and (min-width: 1024px)' }
    },
    defaultCondition: 'mobile',
    properties: {
        position: ['absolute', 'relative', 'fixed'],
        display: [
            'none',
            'block',
            'inline',
            'inline-block',
            'flex',
            'inline-flex'
        ],
        alignItems: ['flex-start', 'center', 'flex-end'],
        justifyContent: ['flex-start', 'center', 'flex-end', 'space-between'],
        flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
        paddingTop: space,
        paddingBottom: space,
        paddingLeft: space,
        paddingRight: space,
        marginTop: space,
        marginBottom: space,
        marginLeft: space,
        marginRight: space,
        gap: space,
        pointerEvents: ['none', 'auto'],
        opacity: [0, 1],
        textAlign: ['left', 'center'],
        maxWidth: contentWidth
    },
    shorthands: {
        padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
        paddingX: ['paddingLeft', 'paddingRight'],
        paddingY: ['paddingTop', 'paddingBottom'],
        margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
        marginX: ['marginLeft', 'marginRight'],
        marginY: ['marginTop', 'marginBottom']
    }
});

export type ResponsiveValue<Value extends string | number> = ConditionalValue<
    typeof responsiveStyles,
    Value
>;
export const mapResponsiveValue = createMapValueFn(responsiveStyles);

const colors = {
    ...gray,
    ...indigo
} as const;

const colorStyles = createAtomicStyles({
    conditions: {
        lightMode: {},
        darkMode: { '@media': '(prefers-color-scheme: dark)' }
    },
    defaultCondition: 'lightMode',
    properties: {
        color: colors,
        background: colors
    }
});

const unresponsiveStyles = createAtomicStyles({
    properties: {
        flexWrap: ['wrap', 'nowrap'],
        top: [0],
        bottom: [0],
        left: [0],
        right: [0],
        flexShrink: [0],
        flexGrow: [0, 1],
        zIndex: [-1, 0, 1],
        width: sizes,
        height: sizes,
        borderRadius: radii,
        cursor: ['pointer']
    }
});

export const atoms = createAtomsFn(
    responsiveStyles,
    colorStyles,
    unresponsiveStyles
);

// It's a good idea to export the Atoms type too
export type Atoms = Parameters<typeof atoms>[0];
