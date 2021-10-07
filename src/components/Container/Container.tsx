import React from 'react';
import type { ReactNode } from 'react';

import type { BoxProps } from '../Box';
import { Box } from '../Box';

interface Props {
    children: ReactNode;
    as?: 'div' | 'main' | 'aside' | 'header' | 'footer' | 'section';
    size?: BoxProps['maxWidth'];
    className?: string;
}

export function Container({
    children,
    as = 'div',
    size = '1280px',
    ...props
}: Props) {
    return (
        <Box as={as} maxWidth={size} paddingX="2x" marginX="auto" {...props}>
            {children}
        </Box>
    );
}
