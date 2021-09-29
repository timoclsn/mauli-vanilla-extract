import { createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import type { RecipeVariants } from '@vanilla-extract/recipes';

import { sprinkles } from '../../sprinkles.css';
import { vars } from '../../theme.css';

const solidText = createVar();
const solidBg = createVar();
const solidBorderHover = createVar();
const solidBorderActive = createVar();
const solidBgActive = createVar();
const solidBorderFocus = createVar();
const solidBgDisabled = createVar();

const ghostText = createVar();
const ghostBorder = createVar();
const ghostBgHover = createVar();
const ghostBgActive = createVar();
const ghostTextFocus = createVar();
const ghostBorderFocus = createVar();
const ghostTextDisabled = createVar();
const ghostBorderDisabled = createVar();

const linkText = createVar();
const linkTextHover = createVar();
const linkTextActive = createVar();
const linkTextFocus = createVar();
const linkTextDisabled = createVar();

const paddingX = createVar();
const paddingY = createVar();

export type ButtonVaraints = RecipeVariants<typeof button>;

export const button = recipe({
    base: [
        sprinkles({
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            textDecoration: 'none',
            gap: 'sm',
            flexShrink: 0
        }),
        {
            ':focus': {
                outline: 'none'
            }
        }
    ],

    variants: {
        size: {
            normal: [
                sprinkles({
                    fontSize: 'md',
                    fontWeight: 'bold'
                }),
                {
                    vars: {
                        [paddingX]: vars.space.lg,
                        [paddingY]: vars.space.md
                    }
                }
            ],
            small: [
                sprinkles({
                    fontSize: 'sm',
                    fontWeight: 'normal'
                }),
                {
                    vars: {
                        [paddingX]: vars.space.lg,
                        [paddingY]: vars.space.md
                    }
                }
            ]
        },

        variant: {
            solid: {
                color: solidText,
                backgroundColor: solidBg,
                borderRadius: vars.radii.round,
                paddingLeft: paddingX,
                paddingRight: paddingX,
                paddingTop: paddingY,
                paddingBottom: paddingY,
                ':hover': {
                    boxShadow: `inset 0 0 0 2px ${solidBorderHover}`
                },
                ':active': {
                    backgroundColor: solidBgActive,
                    boxShadow: `inset 0 0 0 2px ${solidBorderActive}`
                },
                ':focus-visible': {
                    boxShadow: `inset 0 0 0 2px ${solidBorderFocus}`
                },
                ':disabled': {
                    backgroundColor: solidBgDisabled
                }
            },

            ghost: {
                color: ghostText,
                boxShadow: `inset 0 0 0 2px ${ghostBorder}`,
                borderRadius: vars.radii.round,
                paddingLeft: paddingX,
                paddingRight: paddingX,
                paddingTop: paddingY,
                paddingBottom: paddingY,
                ':hover': {
                    backgroundColor: ghostBgHover
                },
                ':active': {
                    backgroundColor: ghostBgActive
                },
                ':focus-visible': {
                    color: ghostTextFocus,
                    boxShadow: `inset 0 0 0 2px ${ghostBorderFocus}`
                },
                ':disabled': {
                    color: ghostTextDisabled,
                    boxShadow: `inset 0 0 0 2px ${ghostBorderDisabled}`
                }
            },

            link: {
                color: linkText,
                backgroundColor: 'transparent',
                ':hover': {
                    color: linkTextHover
                },
                ':active': {
                    color: linkTextActive
                },
                ':focus-visible': {
                    color: linkTextFocus
                },
                ':disabled': {
                    color: linkTextDisabled
                }
            }
        },

        color: {
            normal: {
                vars: {
                    [solidText]: vars.colors.gray2,
                    [solidBg]: vars.colors.gray12,
                    [solidBorderHover]: vars.colors.gray11,
                    [solidBgActive]: vars.colors.gray12,
                    [solidBorderActive]: vars.colors.gray11,
                    [solidBorderFocus]: vars.colors.gray11,
                    [solidBgDisabled]: vars.colors.gray7,

                    [ghostText]: vars.colors.gray12,
                    [ghostBorder]: vars.colors.gray12,
                    [ghostBgHover]: vars.colors.gray3,
                    [ghostBgActive]: vars.colors.gray3,
                    [ghostTextFocus]: vars.colors.gray11,
                    [ghostBorderFocus]: vars.colors.gray11,
                    [ghostTextDisabled]: vars.colors.gray7,
                    [ghostBorderDisabled]: vars.colors.gray7,

                    [linkText]: vars.colors.gray12,
                    [linkTextHover]: vars.colors.gray11,
                    [linkTextActive]: vars.colors.gray11,
                    [linkTextFocus]: vars.colors.gray11,
                    [linkTextDisabled]: vars.colors.gray7
                }
            },

            highlight: {
                vars: {
                    [solidText]: vars.colors.indigo2,
                    [solidBg]: vars.colors.indigo9,
                    [solidBorderHover]: vars.colors.indigo12,
                    [solidBgActive]: vars.colors.indigo11,
                    [solidBorderActive]: vars.colors.indigo12,
                    [solidBorderFocus]: vars.colors.indigo12,
                    [solidBgDisabled]: vars.colors.indigo7,

                    [ghostText]: vars.colors.indigo9,
                    [ghostBorder]: vars.colors.indigo9,
                    [ghostBgHover]: vars.colors.indigo3,
                    [ghostBgActive]: vars.colors.indigo3,
                    [ghostTextFocus]: vars.colors.indigo11,
                    [ghostBorderFocus]: vars.colors.indigo11,
                    [ghostTextDisabled]: vars.colors.indigo7,
                    [ghostBorderDisabled]: vars.colors.indigo7,

                    [linkText]: vars.colors.indigo9,
                    [linkTextHover]: vars.colors.indigo12,
                    [linkTextActive]: vars.colors.indigo12,
                    [linkTextFocus]: vars.colors.indigo12,
                    [linkTextDisabled]: vars.colors.indigo7
                }
            }
        },

        fullWith: {
            true: sprinkles({ width: 'full' })
        }
    },

    defaultVariants: {
        size: 'normal',
        variant: 'solid',
        color: 'normal'
    }
});
