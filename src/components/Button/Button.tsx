import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import * as styles from './Button.css';
import type { Variants } from './Button.css';

interface CommmonProps {
  children: BoxProps['children'];
  className?: BoxProps['className'];
}

type ConditionalProps =
  | {
      type?: 'button' | 'submit' | 'reset';
      onClick?: () => void;
      disabled?: boolean;
      url?: never;
      external?: never;
    }
  | {
      url?: string;
      external?: boolean;
      type?: never;
      onClick?: never;
      disabled?: never;
    };

type Props = CommmonProps & Variants & ConditionalProps;

export function Button({
  type = 'button',
  size = 'normal',
  variant = 'solid',
  color = 'normal',
  url,
  external,
  className,
  ...props
}: Props) {
  const Element = url ? 'a' : 'button';
  return (
    <Box
      as={Element}
      type={Element === 'button' ? type : undefined}
      href={url}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={[styles.variants({ size, variant, color }), className]}
      {...props}
    />
  );
}
