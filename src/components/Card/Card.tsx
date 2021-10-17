import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';

interface Props {
  children: BoxProps['children'];
  as?: BoxProps['as'];
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
