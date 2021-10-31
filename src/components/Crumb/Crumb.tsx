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
        as="a"
        href={url}
        aria-current={isCurrentPage ? 'page' : undefined}
        className={styles.link}
      >
        {children}
      </Box>
    </Box>
  );
}
