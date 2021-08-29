import type { ElementType, ReactNode } from 'react';
import React, { forwardRef } from 'react';
import type { Atoms } from '../../sprinkles.css';
import { atoms } from '../../sprinkles.css';

interface Props extends Atoms {
    children: ReactNode;
    as?: ElementType;
    className?: string;
}

export const Box = forwardRef<HTMLElement, Props>(function Box(
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

    const atomicClasses = atoms(atomProps);

    return (
        <Element
            className={`${atomicClasses}${className ? ` ${className}` : ''}`}
            {...nativeProps}
            ref={ref}>
            {children}
        </Element>
    );
});
