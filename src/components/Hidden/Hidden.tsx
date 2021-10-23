import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import { breakpoints } from '../../theme.css';
import type { Breakpoints } from '../../theme.css';

const breakpointsArr = Object.keys(breakpoints) as Breakpoints[];

interface CommmonProps {
  children: BoxProps['children'];
  className?: BoxProps['className'];
}

type ConditionalProps =
  | {
      below: Breakpoints;
      above?: never;
    }
  | {
      above: Breakpoints;
      below?: never;
    };

type Props = CommmonProps & ConditionalProps;

export function Hidden({ below, above, ...props }: Props) {
  let display: BoxProps['display'];

  if (below) {
    const hideBelowIndex = breakpointsArr.indexOf(below);

    display = breakpointsArr.reduce(
      (acc, breakpoint, index) => {
        if (index === hideBelowIndex) {
          acc[breakpoint] = 'block';
        }

        return acc;
      },
      {
        default: 'none',
      } as Partial<Record<Breakpoints | 'default', 'none' | 'block'>>
    );
  }

  if (above) {
    const hideAboveIndex = breakpointsArr.indexOf(above);

    display = breakpointsArr.reduce(
      (acc, breakpoint, index) => {
        if (index === hideAboveIndex) {
          acc[breakpoint] = 'none';
        }

        return acc;
      },
      {
        default: 'block',
      } as Partial<Record<Breakpoints | 'default', 'none' | 'block'>>
    );
  }

  return <Box display={display} {...props} />;
}
