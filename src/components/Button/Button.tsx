import React from 'react';
import clsx from 'clsx';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import * as styles from './Button.css';
import type { Varaints } from './Button.css';

interface CommmonProps {
    children: BoxProps['children'];
    className?: string;
}

type ConditionalProps =
    | {
          as?: 'button';
          type?: 'button' | 'submit' | 'reset';
          onClick?: () => void;
          disabled?: boolean;
          url?: never;
          external?: never;
      }
    | {
          as?: 'a';
          url?: string;
          external?: boolean;
          type?: never;
          onClick?: never;
          disabled?: never;
      };

type Props = CommmonProps & Varaints & ConditionalProps;

export function Button({
    children,
    as = 'button',
    type = 'button',
    size = 'normal',
    variant = 'solid',
    color = 'normal',
    url,
    className,
    ...props
}: Props) {
    return (
        <Box
            as={as}
            type={as === 'button' ? type : undefined}
            href={url}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className={clsx(
                styles.base,
                styles.variants({ size, variant, color }),
                className
            )}
            {...props}>
            {children}
        </Box>
    );
}
