import React from 'react';

import { Stack } from '../Stack';
import type { StackProps } from '../Stack';

interface Props {
  children: StackProps['children'];
  as?: StackProps['as'];
  space?: StackProps['space'];
  noWrap?: boolean;
  className?: StackProps['className'];
}

export function Inline({
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
    />
  );
}
