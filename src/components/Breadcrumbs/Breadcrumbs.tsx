import React from 'react';
import type { ReactElement } from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import type { CrumbProps } from '../Crumb';
import { Text } from '../Text';
import type { TextProps } from '../Text';

interface Props {
  children: ReactElement<CrumbProps> | ReactElement<CrumbProps>[];
  color?: TextProps['color'];
  size?: TextProps['size'];
  className?: BoxProps['className'];
}

export function Breadcrumbs({ children, color, size, ...props }: Props) {
  return (
    <Box as="nav" aria-label="Breadcrumb" {...props}>
      <Text as="ol" color={color} size={size}>
        {children}
      </Text>
    </Box>
  );
}
