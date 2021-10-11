import React from 'react';
import clsx from 'clsx';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import * as styles from './Link.css';
import type { Variants } from './Link.css';

interface Props {
    children: BoxProps['children'];
    href?: string;
    target?: '_blank';
    rel?: 'noopener noreferrer' | 'noopener';
    className?: string;
}

type LinkProps = Props & Variants;

export function Link({ children, variant, className, ...props }: LinkProps) {
    return (
        <Box
            as="a"
            className={clsx(styles.variants({ variant }), className)}
            {...props}>
            {children}
        </Box>
    );
}
