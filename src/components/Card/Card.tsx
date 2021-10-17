import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';

const validElements = [
  'div',
  'article',
  'aside',
  'details',
  'main',
  'section',
] as const;

interface Props {
  children: BoxProps['children'];
  as?: typeof validElements[number];
  color?: 'normal' | 'highlight';
  fullWidth?: boolean;
  className?: BoxProps['className'];
}

export function Card({
  as = 'div',
  color = 'normal',
  fullWidth,
  ...props
}: Props) {
  return (
    <Box
      as={as}
      borderRadius="4x"
      padding="4x"
      background={color === 'normal' ? 'gray3' : 'indigo9'}
      width={fullWidth ? 'full' : undefined}
      {...props}
    />
  );
}
