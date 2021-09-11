import React from 'react';
import type { ReactNode } from 'react';

import type { BoxProps } from '../Box';
import { Stack } from '../Stack';
import type { StackProps } from '../Stack';

interface Props {
    children: ReactNode;
    as?: StackProps['as'];
    space?: BoxProps['gap'];
    wrap?: boolean;
    className?: string;
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
