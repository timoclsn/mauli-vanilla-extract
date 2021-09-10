import React from 'react';
import type { ReactNode } from 'react';

import type { BoxProps } from '../Box';
import { Stack } from '../Stack';

interface Props {
    children: ReactNode;
    as?: 'div' | 'ul' | 'ol';
    space?: BoxProps['gap'];
    wrap?: boolean;
}

export function Inline({
    children,
    as = 'div',
    space = 'sm',
    wrap = true,
    ...props
}: Props) {
    return (
        <Stack
            as={as}
            direction="horizontal"
            space={space}
            wrap={wrap}
            {...props}>
            {children}
        </Stack>
    );
}
