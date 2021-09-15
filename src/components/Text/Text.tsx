import React from 'react';
import type { ElementType, ReactNode } from 'react';

import { mapColorValue } from '../../sprinkles.css';
import type { ColorValue } from '../../sprinkles.css';
import { Box } from '../Box';
import type { BoxProps } from '../Box';

const colorToColor = {
    dark: 'gray12',
    light: 'gray1',
    highlight: 'indigo11'
} as const;

export interface TextProps {
    children: ReactNode;
    as?: ElementType;
    color?: ColorValue<keyof typeof colorToColor>;
    size?: BoxProps['fontSize'];
    lineHeight?: BoxProps['lineHeight'];
    weight?: BoxProps['fontWeight'];
    className?: string;
}

export function Text({
    children,
    as: Element = 'span',
    color = 'dark',
    size = 'md',
    lineHeight,
    weight = 'normal',
    ...props
}: TextProps) {
    return (
        <Box
            as={Element}
            fontFamily="sans"
            fontSize={size}
            lineHeight={lineHeight}
            fontWeight={weight}
            color={mapColorValue(color, (value) => colorToColor[value])}
            {...props}>
            {children}
        </Box>
    );
}
