import React, { forwardRef } from 'react';
import type { AllHTMLAttributes, ElementType, ReactNode } from 'react';
import clsx from 'clsx';
import type { ClassValue } from 'clsx';

import * as resetStyles from '../../reset.css';
import { sprinkles } from '../../sprinkles.css';
import type { Sprinkles } from '../../sprinkles.css';
import type { BackgroundColor, ForegroundColor } from '../../color';
import { BackgroundProvider } from '../../color/BackgroundProvider';
import { useColorMode } from '../../color/ColorModeContext';

export interface BoxProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      'as' | 'width' | 'height' | 'color' | 'className'
    >,
    Sprinkles {
  children?: ReactNode;
  as?: ElementType;
  className?: ClassValue;
  contextualColor?: ForegroundColor;
  contextualBackground?: BackgroundColor;
}

export const Box = forwardRef<HTMLElement, BoxProps>(function Box(
  {
    as: Element = 'div',
    className,
    color,
    background,
    contextualColor,
    contextualBackground,
    ...props
  },
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

  const { foregroundColors, backgroundColors } = useColorMode();
  const contextualColorValue = foregroundColors[contextualColor!];
  const contextualBackgroundValue = backgroundColors[contextualBackground!];

  const styles = clsx(
    resetStyles.base,
    resetStyles.element[Element as keyof typeof resetStyles.element],
    sprinkles({
      ...atomProps,
      color: contextualColorValue ? contextualColorValue : color,
      background: contextualBackgroundValue
        ? contextualBackgroundValue.color
        : background,
    }),
    className
  );

  const element = <Element ref={ref} className={styles} {...nativeProps} />;

  return contextualBackground ? (
    <BackgroundProvider color={contextualBackground}>
      {element}
    </BackgroundProvider>
  ) : (
    element
  );
});
