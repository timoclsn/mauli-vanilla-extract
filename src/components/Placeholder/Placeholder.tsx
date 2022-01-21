import React from 'react';
import { Box } from '../Box';
import type { BoxProps } from '../Box';

interface Props {
  width?: number | BoxProps['width'];
  height?: number | 'full';
  background?: BoxProps['background'];
  border?: BoxProps['borderColor'];
  className?: BoxProps['className'];
}

export function Placeholder({
  width = 'full',
  height = 40,
  background,
  border,
  ...props
}: Props) {
  return (
    <Box
      width={typeof width !== 'number' ? width : undefined}
      height={typeof height !== 'number' ? 'full' : undefined}
      background={background}
      borderColor={border}
      contextualBackground={!background ? 'secondary' : undefined}
      contextualBorder={!border ? 'secondary' : undefined}
      style={{
        borderWidth: 1,
        borderStyle: 'solid',
        width: typeof width === 'number' ? width : undefined,
        height: typeof height === 'number' ? height : undefined,
      }}
      {...props}
    />
  );
}
