import React from 'react';
import type { ReactNode } from 'react';

import type { BoxProps } from '../Box';
import { Box } from '../Box';

interface Props {
    children: ReactNode;
    as?: 'div' | 'main' | 'aside' | 'header' | 'footer' | 'section';
    size?: BoxProps['maxWidth'];
}

export function Container({
    children,
    as = 'div',
    size = 'md',
    ...props
}: Props) {
    return (
        <Box as={as} maxWidth={size} paddingX="md" marginX="auto" {...props}>
            {children}
        </Box>
    );
}