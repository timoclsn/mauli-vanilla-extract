import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import * as styles from './HiddenVisually.css';

interface Props {
  children: BoxProps['children'];
}

export function HiddenVisually({ children }: Props) {
  return (
    <Box as="span" className={styles.base}>
      {children}
    </Box>
  );
}
