import React from 'react';
import type { ReactNode } from 'react';

import { mapResponsiveValue, ResponsiveValue } from '../sprinkles.css';
import { Box } from './Box';
import type { Space } from '../theme.css';

const directionToFlexDirection = {
    vertical: 'column',
    horizontal: 'row'
} as const;

const alignToAlignItems = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    baseline: 'baseline'
} as const;

const justifyToJustifyContent = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between'
} as const;

interface Props {
    children: ReactNode;
    as?: 'div' | 'ul' | 'ol';
    direction?: ResponsiveValue<keyof typeof directionToFlexDirection>;
    space?: ResponsiveValue<Space>;
    align?: ResponsiveValue<keyof typeof alignToAlignItems>;
    justify?: ResponsiveValue<keyof typeof justifyToJustifyContent>;
    wrap?: boolean;
    fullWith?: boolean;
}

export function Stack({
    children,
    as = 'div',
    direction = 'vertical',
    space = 'md',
    align = 'start',
    justify = 'start',
    wrap = false,
    fullWith = false
}: Props) {
    return (
        <Box
            as={as}
            display="flex"
            flexDirection={mapResponsiveValue(
                direction,
                (value) => directionToFlexDirection[value]
            )}
            gap={space}
            alignItems={mapResponsiveValue(
                align,
                (value) => alignToAlignItems[value]
            )}
            justifyContent={mapResponsiveValue(
                justify,
                (value) => justifyToJustifyContent[value]
            )}
            flexWrap={wrap ? 'wrap' : undefined}
            width={fullWith ? 'full' : undefined}>
            {children}
        </Box>
    );
}
