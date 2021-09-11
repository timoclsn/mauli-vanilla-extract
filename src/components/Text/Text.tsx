import React from 'react';
import type { ElementType, ReactNode } from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';

export interface TextProps {
    children: ReactNode;
    as?: ElementType;
    color?: 'dark' | 'light' | 'highlight';
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
    lineHeight = 'md',
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
            color={
                color === 'highlight'
                    ? 'indigo11'
                    : color === 'dark'
                    ? 'gray12'
                    : 'gray1'
            }
            {...props}>
            {children}
        </Box>
    );
}
