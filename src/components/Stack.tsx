import { mapResponsiveValue, ResponsiveValue } from '../../sprinkles.css';
import React from 'react';
import type { ReactNode } from 'react';
import { Box } from './Box';

interface Props {
    children: ReactNode;
    direction?: ResponsiveValue<keyof typeof directionToFlexDirection>;
}

const directionToFlexDirection = {
    vertical: 'column',
    horizontal: 'row'
} as const;

export function Stack({ children, direction = 'vertical' }: Props) {
    return (
        <Box
            display="flex"
            gap="xl"
            flexDirection={mapResponsiveValue(
                direction,
                (value) => directionToFlexDirection[value]
            )}>
            {children}
        </Box>
    );
}
