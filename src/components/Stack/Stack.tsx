import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import { mapResponsiveValue } from '../../sprinkles.css';
import type { ResponsiveValue } from '../../sprinkles.css';

const directionToFlexDirection = {
  vertical: 'column',
  horizontal: 'row',
} as const;

const alignToAlignItems = {
  stretch: 'stretch',
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  baseline: 'baseline',
} as const;

const justifyToJustifyContent = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
} as const;

export interface StackProps {
  children: BoxProps['children'];
  as?: 'div' | 'ul' | 'ol';
  direction?: ResponsiveValue<keyof typeof directionToFlexDirection>;
  space?: BoxProps['gap'];
  align?: ResponsiveValue<keyof typeof alignToAlignItems>;
  justify?: ResponsiveValue<keyof typeof justifyToJustifyContent>;
  wrap?: boolean;
  className?: BoxProps['className'];
}

export function Stack({
  children,
  as = 'div',
  direction = 'vertical',
  space = '2x',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  ...props
}: StackProps) {
  return (
    <Box
      as={as}
      display="flex"
      flexDirection={mapResponsiveValue(
        direction,
        (value) => directionToFlexDirection[value]
      )}
      gap={space}
      alignItems={mapResponsiveValue(
        align,
        (value) => alignToAlignItems[value]
      )}
      justifyContent={mapResponsiveValue(
        justify,
        (value) => justifyToJustifyContent[value]
      )}
      flexWrap={wrap ? 'wrap' : undefined}
      {...props}
    >
      {children}
    </Box>
  );
}
