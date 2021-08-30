import { composeStyles } from '@vanilla-extract/css';
import type { AllHTMLAttributes, ElementType, ReactNode } from 'react';
import React, { forwardRef } from 'react';
import * as resetStyles from '../reset.css';
import type { Atoms } from '../../sprinkles.css';
import { atoms } from '../../sprinkles.css';

export interface BoxProps
    extends Omit<
            AllHTMLAttributes<HTMLElement>,
            'as' | 'width' | 'height' | 'color'
        >,
        Atoms {
    children: ReactNode;
    as?: ElementType;
    className?: string;
}

export const Box = forwardRef<HTMLElement, BoxProps>(function Box(
    { children, as: Element = 'div', className, ...props },
    ref
) {
    const atomProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};

    for (const key in props) {
        if (atoms.properties.has(key as keyof Atoms)) {
            atomProps[key] = props[key as keyof typeof props];
        } else {
            nativeProps[key] = props[key as keyof typeof props];
        }
    }

    const styles = composeStyles(
        resetStyles.base,
        resetStyles.element[Element as keyof typeof resetStyles.element] || '',
        atoms(atomProps)
    );

    return (
        <Element
            ref={ref}
            className={`${styles}${className ? ` ${className}` : ''}`}
            {...nativeProps}>
            {children}
        </Element>
    );
});
