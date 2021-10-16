import React from 'react';

import type { BoxProps } from '../Box';
import { Stack } from '../Stack';
import type { StackProps } from '../Stack';

interface Props {
  children: BoxProps['children'];
  as?: StackProps['as'];
  space?: BoxProps['gap'];
  noWrap?: boolean;
  className?: BoxProps['className'];
}

export function Inline({
  children,
  as = 'div',
  space = '1x',
  noWrap = false,
  ...props
}: Props) {
  return (
    <Stack
      as={as}
      direction="horizontal"
      space={space}
      wrap={!noWrap}
      {...props}
    >
      {children}
    </Stack>
  );
}
