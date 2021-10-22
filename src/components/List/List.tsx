import React from 'react';
import type { ReactElement } from 'react';

import type { BoxProps } from '../Box';
import { Text } from '../Text';
import type { TextProps } from '../Text';
import * as styles from './List.css';
import type { Variants } from './List.css';
import type { ListItemProps } from '../ListItem';

interface ListBaseProps {
  children: ReactElement<ListItemProps> | ReactElement<ListItemProps>[];
  color?: TextProps['color'];
  size?: TextProps['size'];
  className?: BoxProps['className'];
}

type ListProps = ListBaseProps & Variants;

export function List({ type = 'bullet', className, ...props }: ListProps) {
  return (
    <Text
      as={type === 'bullet' ? 'ul' : 'ol'}
      className={[styles.variants({ type }), className]}
      {...props}
    />
  );
}
