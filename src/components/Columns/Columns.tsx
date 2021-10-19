import React from 'react';
import type { ReactElement } from 'react';

import { Stack } from '../Stack';
import type { StackProps } from '../Stack';
import type { ColumnProps } from '../Column';
import * as styles from './Columns.css';
import { breakpoints } from '../../theme.css';
import type { Breakpoints } from '../../theme.css';

const breakpointsArr = Object.keys(breakpoints) as Breakpoints[];

interface Props {
  children: ReactElement<ColumnProps> | ReactElement<ColumnProps>[];
  space?: StackProps['space'];
  collapseBelow?: Breakpoints;
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
    const collapseBelowIndex = breakpointsArr.indexOf(collapseBelow) + 1; // + 1 to account for default

    direction = breakpointsArr.reduce(
      (acc, breakpoint, index) => {
        if (index < collapseBelowIndex) {
          acc[breakpoint] = 'vertical';
        }

        if (index === collapseBelowIndex) {
          acc[breakpoint] = 'horizontal';
        }

        return acc;
      },
      {
        default: 'vertical',
      } as Partial<Record<Breakpoints, 'vertical' | 'horizontal'>>
    );
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
