import React from 'react';
import type { ReactElement } from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import { Text } from '../Text';
import type { TextProps } from '../Text';
import * as styles from './List.css';
import type { Varaints } from './List.css';

interface ListBaseProps {
  children: ReactElement<ListItemProps> | ReactElement<ListItemProps>[];
  color?: TextProps['color'];
  className?: BoxProps['className'];
}

type ListProps = ListBaseProps & Varaints;

export function List({
  children,
  type = 'bullet',
  className,
  ...props
}: ListProps) {
  return (
    <Text
      as={type === 'bullet' ? 'ul' : 'ol'}
      className={[styles.variants({ type }), className]}
      {...props}
    >
      {children}
    </Text>
  );
}

interface ListItemProps {
  children: BoxProps['children'];
}

export function ListItem({ children }: ListItemProps) {
  return <Box as="li">{children}</Box>;
}
