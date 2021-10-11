import React from 'react';
import type { ReactNode } from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';

interface Props {
    children: ReactNode;
    inset?: BoxProps['padding'];
    insetX?: BoxProps['paddingX'];
    insetY?: BoxProps['paddingY'];
    className?: string;
}

export function Inset({ children, inset, insetX, insetY, ...props }: Props) {
    return (
        <Box
            as="div"
            padding={inset}
            paddingX={insetX}
            paddingY={insetY}
            {...props}>
            {children}
        </Box>
    );
}