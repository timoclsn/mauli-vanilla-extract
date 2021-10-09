import { recipe } from '@vanilla-extract/recipes';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import { createVar, style } from '@vanilla-extract/css';

import { sprinkles } from '../../sprinkles.css';

const noOfLines = createVar();

const lineClamp = style([
    sprinkles({
        overflow: 'hidden'
    }),
    {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        ['WebkitLineClamp' as string]: noOfLines
    }
]);

export type TextVariants = RecipeVariants<typeof textVariants>;

export const textVariants = recipe({
    variants: {
        truncate: {
            true: [
                sprinkles({
                    display: 'block',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                })
            ],
            1: [
                {
                    vars: {
                        [noOfLines]: '1'
                    }
                },
                lineClamp
            ],
            2: [
                {
                    vars: {
                        [noOfLines]: '2'
                    }
                },
                lineClamp
            ],
            3: [
                {
                    vars: {
                        [noOfLines]: '3'
                    }
                },
                lineClamp
            ],
            4: [
                {
                    vars: {
                        [noOfLines]: '4'
                    }
                },
                lineClamp
            ],
            5: [
                {
                    vars: {
                        [noOfLines]: '5'
                    }
                },
                lineClamp
            ]
        }
    }
});
