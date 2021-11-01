import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import * as styles from './Link.css';
import type { Variants } from './Link.css';

interface Props {
  children: BoxProps['children'];
  as?: BoxProps['as'];
  url?: string;
  external?: boolean;
  className?: BoxProps['className'];
}

type LinkProps = Props & Variants;

export function Link({
  url,
  as = 'a',
  external,
  variant,
  className,
  ...props
}: LinkProps) {
  return (
    <Box
      as={as}
      href={url}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={[styles.variants({ variant }), className]}
      {...props}
    />
  );
}
