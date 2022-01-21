import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import * as styles from './HiddenVisually.css';

interface Props {
  children: BoxProps['children'];
  className?: BoxProps['className'];
}

export function HiddenVisually({ className, ...props }: Props) {
  return (
    <Box
      as="span"
      position="absolute"
      className={[styles.base, className]}
      {...props}
    />
  );
}
