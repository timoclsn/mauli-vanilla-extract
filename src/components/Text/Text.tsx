import React from 'react';
import type { ElementType, ReactNode } from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';

interface Props {
    children: ReactNode;
    as?: ElementType;
    variant?: 'normal' | 'highlight';
    size?: BoxProps['fontSize'];
    lineHeight?: BoxProps['lineHeight'];
    weight?: BoxProps['fontWeight'];
    className?: string;
}

export function Text({
    children,
    as: Element = 'span',
    variant = 'normal',
    size = 'md',
    lineHeight = 'md',
    weight = 'normal',
    ...props
}: Props) {
    return (
        <Box
            as={Element}
            fontFamily="sans"
            fontSize={size}
            lineHeight={lineHeight}
            fontWeight={weight}
            color={variant === 'highlight' ? 'indigo11' : 'gray12'}
            {...props}>
            {children}
        </Box>
    );
}
