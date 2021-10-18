import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';

export interface ListItemProps {
  children: BoxProps['children'];
  className?: BoxProps['className'];
}

export function ListItem({ ...props }: ListItemProps) {
  return <Box as="li" {...props} />;
}
