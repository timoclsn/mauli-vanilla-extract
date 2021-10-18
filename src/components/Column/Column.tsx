import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import * as styles from './Column.css';
import type { Varaints } from './Column.css';

interface Props {
  children: BoxProps['children'];
  className?: BoxProps['className'];
}

export type ColumnProps = Props & Varaints;

export function Column({
  className,
  width = 'content',
  ...props
}: ColumnProps) {
  return <Box className={[styles.variants({ width })]} {...props} />;
}
