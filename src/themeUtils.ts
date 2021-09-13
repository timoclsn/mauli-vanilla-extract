import { createStyleObject } from '@capsizecss/core';
import type { StyleRule } from '@vanilla-extract/css';

export function createFontSizeStyleObjects<T extends string>(
    fontSizes: Record<
        T,
        {
            fontSize: string;
            lineHeight: string;
            capHeightTrim: string;
            baselineTrim: string;
        }
    >
) {
    const mappedFontSizes: Partial<Record<T, StyleRule>> = {};

    for (const key in fontSizes) {
        mappedFontSizes[key] = createStyleObject(fontSizes[key]);
    }

    return mappedFontSizes;
}
