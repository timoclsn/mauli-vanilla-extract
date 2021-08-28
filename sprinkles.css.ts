import {
    ConditionalValue,
    createAtomicStyles,
    createAtomsFn,
    createMapValueFn
} from '@vanilla-extract/sprinkles';

const space = {
    none: 0,
    small: '4px',
    medium: '8px',
    large: '16px'
};

const responsiveStyles = createAtomicStyles({
    conditions: {
        mobile: {},
        tablet: { '@media': 'screen and (min-width: 768px)' },
        desktop: { '@media': 'screen and (min-width: 1024px)' }
    },
    defaultCondition: 'mobile',
    properties: {
        display: ['none', 'flex', 'block', 'inline', 'inline-flex'],
        flexDirection: ['row', 'column'],
        justifyContent: [
            'stretch',
            'flex-start',
            'center',
            'flex-end',
            'space-around',
            'space-between'
        ],
        alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
        paddingTop: space,
        paddingBottom: space,
        paddingLeft: space,
        paddingRight: space,
        gap: space
    },
    shorthands: {
        padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
        paddingX: ['paddingLeft', 'paddingRight'],
        paddingY: ['paddingTop', 'paddingBottom'],
        placeItems: ['justifyContent', 'alignItems']
    }
});

const colors = {
    'blue-50': '#eff6ff',
    'blue-100': '#dbeafe',
    'blue-200': '#bfdbfe',
    'gray-700': '#374151',
    'gray-800': '#1f2937',
    'gray-900': '#111827'
};

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
export type ResponsiveValue<Value extends string | number> = ConditionalValue<
    typeof responsiveStyles,
    Value
>;
export const mapResponsiveValue = createMapValueFn(responsiveStyles);
export const atoms = createAtomsFn(responsiveStyles, colorStyles);

// It's a good idea to export the Atoms type too
export type Atoms = Parameters<typeof atoms>[0];
