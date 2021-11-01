import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import * as styles from './Crumb.css';

export interface CrumbProps {
  children: BoxProps['children'];
  url: string;
  isCurrentPage?: boolean;
  className?: BoxProps['className'];
}

export function Crumb({
  children,
  className,
  url,
  isCurrentPage,
  ...props
}: CrumbProps) {
  return (
    <Box
      as="li"
      display="inline"
      className={[styles.base, className]}
      {...props}
    >
      <Box
        as={isCurrentPage ? 'span' : 'a'}
        href={!isCurrentPage ? url : undefined}
        aria-current={isCurrentPage ? 'page' : undefined}
        cursor="pointer"
        className={styles.link}
      >
        {children}
      </Box>
    </Box>
  );
}
