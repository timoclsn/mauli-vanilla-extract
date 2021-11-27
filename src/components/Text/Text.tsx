import React, { Children } from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import * as styles from './Text.css';
import type { Variants } from './Text.css';

const validElements = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'ul',
  'ol',
  'span',
  'strong',
  'small',
  'label',
] as const;

interface Props {
  children: BoxProps['children'];
  as?: typeof validElements[number];
  color?: BoxProps['contextualColor'];
  size?: BoxProps['fontSize'];
  weight?: BoxProps['fontWeight'];
  decoration?: BoxProps['textDecoration'];
  transform?: BoxProps['textTransform'];
  align?: BoxProps['textAlign'];
  noWrap?: boolean;
  className?: BoxProps['className'];
}

export type TextProps = Props & Variants;

export function Text({
  children,
  as = 'p',
  color = 'primary',
  size = '16px',
  weight = 'normal',
  decoration,
  transform,
  align,
  truncate,
  noWrap,
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
      contextualColor={color}
      textDecoration={decoration}
      textTransform={transform}
      textAlign={align}
      whiteSpace={noWrap ? 'nowrap' : undefined}
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
