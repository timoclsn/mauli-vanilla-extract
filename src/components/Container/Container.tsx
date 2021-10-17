import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';

interface Props {
  children: BoxProps['children'];
  as?: 'div' | 'main' | 'aside' | 'header' | 'footer' | 'section';
  width?: BoxProps['maxWidth'];
  className?: BoxProps['className'];
}

export function Container({ as = 'div', width = '1280px', ...props }: Props) {
  return <Box as={as} maxWidth={width} marginX="auto" {...props} />;
}
