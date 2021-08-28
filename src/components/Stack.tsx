import { atoms } from '../../sprinkles.css';
import React from 'react';
import type { ReactNode } from 'react';
import { composeStyles } from '@vanilla-extract/css';
import { useResponsiveProps } from '../hooks/useResponsiveProps';

const baseStyles = atoms({
    display: 'flex',
    gap: 'medium'
});

const directionStyles = {
    vertical: atoms({
        flexDirection: 'column'
    }),
    horizontal: atoms({
        flexDirection: 'row'
    })
};

type DirectionStyles = keyof typeof directionStyles;
type Breakpoints = 'mobile' | 'tablet' | 'desktop';

interface Props {
    children: ReactNode;
    direction: DirectionStyles | Record<Breakpoints, DirectionStyles>;
}

export function Stack({ children, direction = 'vertical' }: Props) {
    const styles = composeStyles(
        baseStyles,
        directionStyles[useResponsiveProps<DirectionStyles>(direction)]
    );

    return <div className={styles}>{children}</div>;
}
