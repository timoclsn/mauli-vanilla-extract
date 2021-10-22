import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import * as styles from './Skeleton.css';
import type { Variants } from './Skeleton.css';

interface CommmonProps {
  className?: BoxProps['className'];
}

type ConditionalProps =
  | {
      width?: BoxProps['width'];
      height?: string;
      count?: number;
      size?: never;
      circle?: never;
    }
  | {
      circle?: true;
      size?: string;
      width?: never;
      height?: never;
      count?: never;
    };

type SkeletonProps = CommmonProps & ConditionalProps & Variants;

export function Skeleton({
  count = 1,
  color = 'normal',
  width = 'full',
  height,
  size,
  circle,
  className,
  ...props
}: SkeletonProps) {
  const elements = [];

  for (let i = 0; i < count; i++) {
    elements.push(
      <Box
        key={i}
        as="span"
        display="inline-block"
        position="relative"
        overflow="hidden"
        width={width}
        className={[styles.variants({ color, circle }), className]}
        style={{
          height: size ? size : height ? height : undefined,
          width: size ? size : undefined,
        }}
        {...props}
      >
        &zwnj;
      </Box>
    );
  }

  return <>{elements}</>;
}
