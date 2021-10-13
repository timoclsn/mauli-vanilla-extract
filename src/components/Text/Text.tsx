import React, { Children } from 'react';
import type { ElementType } from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import * as styles from './Text.css';
import type { Variants } from './Text.css';
import { mapColorValue } from '../../sprinkles.css';
import type { ColorValue } from '../../sprinkles.css';

const colorToColor = {
  dark: 'gray12',
  light: 'gray1',
  highlight: 'indigo11',
} as const;

interface Props {
  children: BoxProps['children'];
  as?: ElementType;
  color?: ColorValue<keyof typeof colorToColor>;
  size?: BoxProps['fontSize'];
  weight?: BoxProps['fontWeight'];
  decoration?: BoxProps['textDecoration'];
  transform?: BoxProps['textTransform'];
  align?: BoxProps['textAlign'];
  noWrap?: boolean;
  className?: string;
}

export type TextProps = Props & Variants;

export function Text({
  children,
  as = 'p',
  color = 'dark',
  size = '16px',
  weight = 'normal',
  decoration,
  transform,
  align,
  truncate,
  noWrap,
  className,
  ...props
}: TextProps) {
  let title = '';
  if (truncate) {
    Children.map(children, (child) => {
      if (typeof child === 'string') {
        title += child;
      }
    });
  }
  return (
    <Box
      as={as}
      title={truncate ? title : undefined}
      fontFamily="sans"
      fontSize={size}
      fontWeight={weight}
      color={mapColorValue(color, (value) => colorToColor[value])}
      textDecoration={decoration}
      textTransform={transform}
      textAlign={align}
      whiteSpace={noWrap ? 'nowrap' : undefined}
      className={className}
      {...props}
    >
      {truncate ? (
        <span className={styles.variants({ truncate })}>{children}</span>
      ) : (
        children
      )}
    </Box>
  );
}
