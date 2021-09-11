import React from 'react';
import type { ReactNode } from 'react';

import { Box } from '../Box';

interface Props {
    children: ReactNode;
    className?: string;
}

export function Label({ children, ...props }: Props) {
    return (
        <Box
            fontSize="sm"
            paddingX="md"
            paddingY="sm"
            color="indigo2"
            background="indigo9"
            borderRadius="round"
            {...props}>
            {children}
        </Box>
    );
}
