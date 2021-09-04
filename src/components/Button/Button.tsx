import React from 'react';
import type { ReactNode } from 'react';
import { Box } from '../Box';
import * as styles from './Button.css';
import clsx from 'clsx';

interface CommmonProps {
    children: ReactNode;
    size?: keyof typeof styles.size;
    variant?: keyof typeof styles.variant;
    color?: keyof typeof styles.color;
    fullWith?: boolean;
}

type AsProps =
    | {
          as?: 'button';
          type?: 'button' | 'submit' | 'reset';
          onClick: () => void;
          href?: never;
          target?: never;
          rel?: never;
      }
    | {
          as?: 'a';
          type?: never;
          onClick?: never;
          href: string;
          target?: '_blank';
          rel?: 'noopener noreferrer';
      };

type Props = CommmonProps & AsProps;

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
