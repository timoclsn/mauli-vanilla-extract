import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import * as styles from './Bleed.css';
import type { Variants } from './Bleed.css';

interface Props {
  children: BoxProps['children'];
  className?: BoxProps['className'];
}

type BleedProps = Props & Variants;

export function Bleed({ width = 'full', className }: BleedProps) {
  return <Box className={[styles.variants({ width }), className]} />;
}
