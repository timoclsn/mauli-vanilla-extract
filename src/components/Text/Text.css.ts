import { recipe } from '@vanilla-extract/recipes';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import { createVar, style } from '@vanilla-extract/css';

import { sprinkles } from '../../sprinkles.css';

const lineClamp = createVar();

const lineClampBase = style([
    sprinkles({
        overflow: 'hidden'
    }),
    {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        ['WebkitLineClamp' as string]: lineClamp
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
                        [lineClamp]: '1'
                    }
                },
                lineClampBase
            ],
            2: [
                {
                    vars: {
                        [lineClamp]: '2'
                    }
                },
                lineClampBase
            ],
            3: [
                {
                    vars: {
                        [lineClamp]: '3'
                    }
                },
                lineClampBase
            ],
            4: [
                {
                    vars: {
                        [lineClamp]: '4'
                    }
                },
                lineClampBase
            ],
            5: [
                {
                    vars: {
                        [lineClamp]: '5'
                    }
                },
                lineClampBase
            ]
        }
    }
});
