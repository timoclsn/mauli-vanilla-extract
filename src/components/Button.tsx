import { mapResponsiveValue, ResponsiveValue } from '../../sprinkles.css';
import React from 'react';
import type { ReactNode } from 'react';
import { Box } from './Box';

const sizeToPaddingX = {
    normal: 'xl',
    small: 'lg'
} as const;

const sizeToPaddingY = {
    normal: 'lg',
    small: 'md'
} as const;

interface Props {
    children: ReactNode;
    size?: ResponsiveValue<keyof typeof sizeToPaddingX>;
}

export function Button({ children, size = 'normal' }: Props) {
    return (
        <Box
            as="button"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            paddingX={mapResponsiveValue(
                size,
                (value) => sizeToPaddingX[value]
            )}
            paddingY={mapResponsiveValue(
                size,
                (value) => sizeToPaddingY[value]
            )}>
            {children}
        </Box>
    );
}
