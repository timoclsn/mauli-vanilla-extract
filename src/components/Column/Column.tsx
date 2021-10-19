import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import * as styles from './Column.css';
import type { Variants } from './Column.css';

export interface Props {
  children: BoxProps['children'];
  className?: BoxProps['className'];
}

export type ColumnProps = Props & Variants;

export function Column({ className, width, ...props }: ColumnProps) {
  return <Box className={[styles.variants({ width }), className]} {...props} />;
}
