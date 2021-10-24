import React from 'react';
import type { ReactElement } from 'react';

import { Stack } from '../Stack';
import type { StackProps } from '../Stack';
import type { ColumnProps } from '../Column';
import * as styles from './Columns.css';
import type { Breakpoints } from '../../theme.css';
import { resolveResponsiveValue } from '../../utils/resolveResponsiveValue';

interface Props {
  children: ReactElement<ColumnProps> | ReactElement<ColumnProps>[];
  space?: StackProps['space'];
  align?: StackProps['align'];
  justify?: StackProps['justify'];
  collapseBelow?: Breakpoints;
  reverse?: StackProps['reverse'];
  className?: StackProps['className'];
}

export function Columns({
  collapseBelow,
  space = 'none',
  className,
  ...props
}: Props) {
  let direction: StackProps['direction'] = 'horizontal';

  if (collapseBelow) {
    direction = resolveResponsiveValue(collapseBelow, 'vertical', 'horizontal');
  }

  return (
    <Stack
      direction={direction}
      space={space}
      className={[styles.base, className]}
      {...props}
    />
  );
}
