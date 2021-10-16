import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import * as styles from './Bleed.css';
import type { Varaints } from './Bleed.css';

interface Props {
  children: BoxProps['children'];
  className?: BoxProps['className'];
}

type BleedProps = Props & Varaints;

export function Bleed({ children, width = 'full', className }: BleedProps) {
  return (
    <Box className={[styles.variants({ width }), className]}>{children}</Box>
  );
}
