import React from 'react';

import { Text } from '../Text';
import type { TextProps } from '../Text';
import type { BoxProps } from '../Box';

interface Props {
    children: BoxProps['children'];
    as?: 'h1' | 'h2' | 'h3' | 'h4';
    color?: TextProps['color'];
    size?: TextProps['size'];
    weight?: TextProps['weight'];
    decoration?: TextProps['decoration'];
    transform?: TextProps['transform'];
    align?: TextProps['align'];
    noWrap?: TextProps['noWrap'];
    truncate?: TextProps['truncate'];
    className?: string;
}

export function Heading({
    children,
    as = 'h2',
    color = 'highlight',
    size = '24px',
    weight = 'bold',
    ...props
}: Props) {
    return (
        <Text as={as} size={size} weight={weight} color={color} {...props}>
            {children}
        </Text>
    );
}
