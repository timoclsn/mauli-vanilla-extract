import { createStyleObject } from '@capsizecss/core';
import type { StyleRule } from '@vanilla-extract/css';

export function createFontSizeStyleObjects(
    fontSizes: Record<
        string,
        {
            fontSize: string;
            lineHeight: string;
            capHeightTrim: string;
            baselineTrim: string;
        }
    >
) {
    const mappedFontSizes: Record<string, StyleRule> = {};

    for (const key in fontSizes) {
        mappedFontSizes[key] = createStyleObject(fontSizes[key]);
    }

    return mappedFontSizes;
}
