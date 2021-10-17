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
  'header',
  'footer',
] as const;

interface Props {
  children: BoxProps['children'];
  as?: typeof validElements[number];
  width?: BoxProps['maxWidth'];
  className?: BoxProps['className'];
}

export function Container({ as = 'div', width = '1280px', ...props }: Props) {
  return <Box as={as} maxWidth={width} marginX="auto" {...props} />;
}
