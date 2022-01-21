import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';

interface Props {
  children: BoxProps['children'];
  className?: BoxProps['className'];
}

export function Cover({ ...props }: Props) {
  return (
    <Box position="absolute" top={0} right={0} bottom={0} left={0} {...props} />
  );
}
