import React from 'react';
import clsx from 'clsx';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import * as styles from './Link.css';
import type { Variants } from './Link.css';

interface Props {
    children: BoxProps['children'];
    url?: string;
    external?: boolean;
    className?: string;
}

type LinkProps = Props & Variants;

export function Link({
    children,
    url,
    external,
    variant,
    className,
    ...props
}: LinkProps) {
    return (
        <Box
            as="a"
            href={url}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className={clsx(styles.variants({ variant }), className)}
            {...props}>
            {children}
        </Box>
    );
}
