import React from 'react';
import clsx from 'clsx';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import * as styles from './Bleed.css';
import type { Varaints } from './Bleed.css';

interface Props {
  children: BoxProps['children'];
  className?: string;
}

type BleedProps = Props & Varaints;

export function Bleed({ children, bleed = 'full', className }: BleedProps) {
  return (
    <Box className={clsx(styles.variants({ bleed }), className)}>
      {children}
    </Box>
  );
}
