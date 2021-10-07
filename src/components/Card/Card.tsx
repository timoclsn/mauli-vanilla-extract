import React from 'react';
import type { ElementType, ReactNode } from 'react';

import { Box } from '../Box';

interface Props {
    children: ReactNode;
    as?: ElementType;
    color?: 'normal' | 'highlight';
    fullWidth?: boolean;
    className?: string;
}

export function Card({
    children,
    as = 'div',
    color = 'normal',
    fullWidth,
    ...props
}: Props) {
    return (
        <Box
            as={as}
            borderRadius="4x"
            padding="4x"
            background={color === 'normal' ? 'gray3' : 'indigo9'}
            width={fullWidth ? 'full' : undefined}
            {...props}>
            {children}
        </Box>
    );
}
