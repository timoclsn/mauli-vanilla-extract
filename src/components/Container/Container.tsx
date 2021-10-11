import React from 'react';
import type { ReactNode } from 'react';

import type { BoxProps } from '../Box';
import { Box } from '../Box';

interface Props {
    children: ReactNode;
    as?: 'div' | 'main' | 'aside' | 'header' | 'footer' | 'section';
    width?: BoxProps['maxWidth'];
    className?: string;
}

export function Container({
    children,
    as = 'div',
    width = '1280px',
    ...props
}: Props) {
    return (
        <Box as={as} maxWidth={width} marginX="auto" {...props}>
            {children}
        </Box>
    );
}
