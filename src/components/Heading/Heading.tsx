import React from 'react';

import { Text } from '../Text';
import type { TextProps } from '../Text';

const levelToFontSize = {
  1: '60px',
  2: '36px',
  3: '24px',
  4: '16px',
} as const;

interface Props {
  children: TextProps['children'];
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  level?: keyof typeof levelToFontSize;
  color?: TextProps['color'];
  className?: string;
}

export function Heading({
  children,
  as = 'h2',
  level = 2,
  color = 'highlight',
  ...props
}: Props) {
  return (
    <Text
      as={as}
      size={levelToFontSize[level]}
      weight="bold"
      color={color}
      {...props}
    >
      {children}
    </Text>
  );
}
