import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';

interface Props {
  children: BoxProps['children'];
  inset?: BoxProps['padding'];
  insetX?: BoxProps['paddingX'];
  insetY?: BoxProps['paddingY'];
  className?: BoxProps['className'];
}

export function Inset({ inset, insetX, insetY, ...props }: Props) {
  return <Box padding={inset} paddingX={insetX} paddingY={insetY} {...props} />;
}
