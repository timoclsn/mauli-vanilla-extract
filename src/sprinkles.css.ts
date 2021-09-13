import type { ConditionalValue } from '@vanilla-extract/sprinkles';
import {
    createAtomicStyles,
    createAtomsFn,
    createMapValueFn
} from '@vanilla-extract/sprinkles';

import { vars } from './theme.css';
import { createFontSizeStyleObjects } from './themeUtils';

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
        alignItems: ['flex-start', 'center', 'flex-end', 'baseline'],
        justifyContent: ['flex-start', 'center', 'flex-end', 'space-between'],
        flexDirection: ['row', 'column'],
        paddingTop: vars.space,
        paddingBottom: vars.space,
        paddingLeft: vars.space,
        paddingRight: vars.space,
        marginTop: vars.space,
        marginBottom: vars.space,
        marginLeft: { ...vars.space, auto: 'auto' },
        marginRight: { ...vars.space, auto: 'auto' },
        gap: vars.space,
        opacity: [0, 1],
        textAlign: ['left', 'center', 'right'],
        maxWidth: vars.contentWidth,
        fontSize: createFontSizeStyleObjects(vars.fontSizes),
        lineHeight: vars.lineHeights
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

const colorStyles = createAtomicStyles({
    conditions: {
        lightMode: {},
        darkMode: { '@media': '(prefers-color-scheme: dark)' }
    },
    defaultCondition: 'lightMode',
    properties: {
        color: vars.colors,
        background: vars.colors
    }
});

export type ColorValue<Value extends string | number> = ConditionalValue<
    typeof colorStyles,
    Value
>;

export const mapColorValue = createMapValueFn(colorStyles);

const unconditionalStyles = createAtomicStyles({
    properties: {
        flexWrap: ['wrap', 'nowrap'],
        top: [0],
        bottom: [0],
        left: [0],
        right: [0],
        flex: ['none', 1],
        zIndex: [-1, 0, 1],
        width: vars.sizes,
        height: vars.sizes,
        borderRadius: vars.radii,
        cursor: ['pointer'],
        fontFamily: vars.fonts,
        fontWeight: vars.fontWeights,
        textDecoration: ['none', 'underline']
    }
});

export type Atoms = Parameters<typeof atoms>[0];

export const atoms = createAtomsFn(
    responsiveStyles,
    colorStyles,
    unconditionalStyles
);
