import React from 'react';
import clsx from 'clsx';

import { Box } from '../Box';
import type { BoxProps } from '../Box';
import { linkVariants } from './Link.css';
import type { LinkVariants } from './Link.css';

interface Props {
    children: BoxProps['children'];
    href?: string;
    target?: '_blank';
    rel?: 'noopener noreferrer' | 'noopener';
    className?: string;
}

type LinkProps = Props & LinkVariants;

export function Link({ children, variant, className, ...props }: LinkProps) {
    return (
        <Box
            as="a"
            className={clsx(linkVariants({ variant }), className)}
            {...props}>
            {children}
        </Box>
    );
}
