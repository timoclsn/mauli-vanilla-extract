import {
    atoms,
    mapResponsiveValue,
    ResponsiveValue
} from '../../sprinkles.css';
import React from 'react';
import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    direction?: ResponsiveValue<keyof typeof directionToFlexDirection>;
}

const directionToFlexDirection = {
    vertical: 'column',
    horizontal: 'row'
} as const;

export function Stack({ children, direction = 'vertical' }: Props) {
    const styles = atoms({
        display: 'flex',
        gap: 'xl',
        flexDirection: mapResponsiveValue(
            direction,
            (value) => directionToFlexDirection[value]
        )
    });

    return <div className={styles}>{children}</div>;
}
