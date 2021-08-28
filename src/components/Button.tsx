import { atoms } from '../../sprinkles.css';
import React from 'react';
import type { ReactNode } from 'react';
import { composeStyles } from '@vanilla-extract/css';

const baseStyles = atoms({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const sizeStyles = {
    normal: atoms({
        paddingX: 'large',
        paddingY: 'medium'
    }),
    small: atoms({
        paddingX: 'medium',
        paddingY: 'small'
    })
};

interface Props {
    children: ReactNode;
    size?: keyof typeof sizeStyles;
}

export function Button({ children, size = 'normal' }: Props) {
    const styles = composeStyles(baseStyles, sizeStyles[size]);

    return <button className={styles}>{children}</button>;
}
