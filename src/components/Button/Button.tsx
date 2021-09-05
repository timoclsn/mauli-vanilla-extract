import React from 'react';
import type { ReactNode } from 'react';
import clsx from 'clsx';

import { Box } from '../Box';
import * as styles from './Button.css';

interface CommmonProps {
    children: ReactNode;
    size?: keyof typeof styles.size;
    variant?: keyof typeof styles.variant;
    color?: keyof typeof styles.color;
    fullWith?: boolean;
}

type ConditionalProps =
    | {
          as?: 'button';
          type?: 'button' | 'submit' | 'reset';
          onClick?: () => void;
          disabled?: boolean;
          href?: never;
          target?: never;
          rel?: never;
      }
    | {
          as?: 'a';
          href?: string;
          target?: '_blank';
          rel?: 'noopener noreferrer';
          type?: never;
          onClick?: never;
          disabled?: never;
      };

type Props = CommmonProps & ConditionalProps;

export function Button({
    children,
    as = 'button',
    type = 'button',
    size = 'normal',
    variant = 'solid',
    color = 'normal',
    fullWith = false,
    ...props
}: Props) {
    const className = clsx(
        styles.base,
        styles.size[size],
        styles.variant[variant],
        styles.color[color]
    );
    return (
        <Box
            as={as}
            type={as === 'button' ? type : undefined}
            className={className}
            width={fullWith ? 'full' : undefined}
            {...props}>
            {children}
        </Box>
    );
}
