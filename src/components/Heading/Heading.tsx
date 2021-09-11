import React from 'react';
import type { ReactNode } from 'react';

import { Text } from '../Text';
import type { BoxProps } from '../Box';

interface Props {
    children: ReactNode;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    variant?: 'normal' | 'highlight';
    size?: BoxProps['fontSize'];
    lineHeight?: BoxProps['lineHeight'];
    weight?: BoxProps['fontWeight'];
    className?: string;
}

export function Heading({
    children,
    as: Element = 'h1',
    variant = 'highlight',
    size = '3xl',
    lineHeight = 'md',
    weight = 'bold',
    ...props
}: Props) {
    return (
        <Text
            as={Element}
            size={size}
            lineHeight={lineHeight}
            weight={weight}
            variant={variant}
            {...props}>
            {children}
        </Text>
    );
}
