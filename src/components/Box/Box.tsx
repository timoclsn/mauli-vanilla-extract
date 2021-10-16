import React, { forwardRef } from 'react';
import type { AllHTMLAttributes, ElementType, ReactNode } from 'react';
import clsx from 'clsx';
import type { ClassValue } from 'clsx';

import * as resetStyles from '../../reset.css';
import { sprinkles } from '../../sprinkles.css';
import type { Sprinkles } from '../../sprinkles.css';

export interface BoxProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      'as' | 'width' | 'height' | 'color' | 'className'
    >,
    Sprinkles {
  children?: ReactNode;
  as?: ElementType;
  className?: ClassValue;
}

export const Box = forwardRef<HTMLElement, BoxProps>(function Box(
  { children, as: Element = 'div', className, ...props },
  ref
) {
  const atomProps: Record<string, unknown> = {};
  const nativeProps: Record<string, unknown> = {};

  for (const key in props) {
    if (sprinkles.properties.has(key as keyof Sprinkles)) {
      atomProps[key] = props[key as keyof typeof props];
    } else {
      nativeProps[key] = props[key as keyof typeof props];
    }
  }

  const styles = clsx(
    resetStyles.base,
    resetStyles.element[Element as keyof typeof resetStyles.element],
    sprinkles(atomProps),
    className
  );

  return (
    <Element ref={ref} className={styles} {...nativeProps}>
      {children}
    </Element>
  );
});
