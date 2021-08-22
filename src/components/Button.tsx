import React from 'react';
import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export function Button({ children }: Props) {
    return <button>{children}</button>;
}
