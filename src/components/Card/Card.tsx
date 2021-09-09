import React from 'react';
import type { ElementType, ReactNode } from 'react';

import { Box } from '../Box';

interface Props {
    children: ReactNode;
    as?: ElementType;
    variant?: 'normal' | 'highlight';
    fullWidth?: boolean;
}

export function Card({
    children,
    as = 'div',
    variant = 'normal',
    fullWidth,
    ...props
}: Props) {
    return (
        <Box
            as={as}
            borderRadius="lg"
            padding="xl"
            background={variant === 'normal' ? 'gray9' : 'indigo9'}
            width={fullWidth ? 'full' : undefined}
            {...props}>
            {children}
        </Box>
    );
}
