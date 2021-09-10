import React from 'react';
import type { ReactNode } from 'react';

import { Box } from '../Box';

interface Props {
    children: ReactNode;
}

export function Label({ children }: Props) {
    return (
        <Box
            fontSize="sm"
            fontFamily="sans"
            paddingX="md"
            paddingY="sm"
            color="indigo2"
            background="indigo9"
            borderRadius="round">
            {children}
        </Box>
    );
}
