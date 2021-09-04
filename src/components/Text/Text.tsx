import React from 'react';
import type { ElementType, ReactNode } from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';

interface Props {
    children: ReactNode;
    as?: ElementType;
    variant?: 'normal' | 'highlight';
    size?: BoxProps['fontSize'];
    weight?: BoxProps['fontWeight'];
}

export function Text({
    children,
    as: Element = 'span',
    variant = 'normal',
    size = 'md',
    weight = 'normal'
}: Props) {
    return (
        <Box
            as={Element}
            fontFamily="sans"
            fontSize={size}
            fontWeight={weight}
            color={variant === 'highlight' ? 'indigo8' : 'gray8'}>
            {children}
        </Box>
    );
}
