import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';

interface Props {
  children: BoxProps['children'];
  className?: BoxProps['className'];
}

export function Label({ ...props }: Props) {
  return (
    <Box
      fontSize="16px"
      fontFamily="sans"
      paddingX="2x"
      paddingY="1x"
      color="indigo2"
      background="indigo9"
      borderRadius="round"
      {...props}
    />
  );
}
