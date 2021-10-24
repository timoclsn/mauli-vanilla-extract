import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import type { Breakpoints } from '../../theme.css';
import { resolveResponsiveValue } from '../../utils/resolveResponsiveValue';

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
    display = resolveResponsiveValue(below, 'none', 'block');
  }

  if (above) {
    display = resolveResponsiveValue(above, 'block', 'none');
  }

  return <Box display={display} {...props} />;
}
