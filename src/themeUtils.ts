import type { StyleRule } from '@vanilla-extract/css';

export function mapThemeObject<Input extends Record<string, unknown>>(
    obj: Input,
    fn: <Key extends keyof Input>(value: Input[Key]) => StyleRule
) {
    const result: Partial<Record<keyof Input, StyleRule>> = {};

    for (const key in obj) {
        result[key] = fn(obj[key]);
    }

    return result;
}
