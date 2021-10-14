import React from 'react';
import clsx from 'clsx';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import * as styles from './Skeleton.css';
import type { Varaints } from './Skeleton.css';

interface CommmonProps {
  className?: string;
}

type ConditionalProps =
  | {
      width?: BoxProps['width'];
      height?: string;
      size?: never;
      circle?: never;
    }
  | {
      circle?: true;
      size?: string;
      width?: never;
      height?: never;
    };

type SkeletonProps = CommmonProps & ConditionalProps & Varaints;

export function Skeleton({
  className,
  color = 'normal',
  width = 'full',
  height,
  size,
  circle,
}: SkeletonProps) {
  return (
    <Box
      as="span"
      display="inline-block"
      position="relative"
      overflow="hidden"
      width={width}
      className={clsx(styles.variants({ color, circle }), className)}
      style={{
        height: size ? size : height ? height : undefined,
        width: size ? size : undefined,
      }}
    />
  );
}
