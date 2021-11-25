import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import type { Breakpoint } from '../../tokens';
import { resolveResponsiveValue } from '../../utils/resolveResponsiveValue';

interface CommmonProps {
  children: BoxProps['children'];
  className?: BoxProps['className'];
}

type ConditionalProps =
  | {
      below: Breakpoint;
      above?: never;
    }
  | {
      above: Breakpoint;
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
