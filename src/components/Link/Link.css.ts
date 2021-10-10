import { recipe } from '@vanilla-extract/recipes';
import type { RecipeVariants } from '@vanilla-extract/recipes';

import { sprinkles } from '../../sprinkles.css';

export type LinkVariants = RecipeVariants<typeof linkVariants>;

export const linkVariants = recipe({
    variants: {
        variant: {
            normal: [
                sprinkles({
                    textDecoration: 'underline'
                }),
                {
                    ':hover': {
                        opacity: 0.8
                    }
                }
            ],
            highlight: [
                sprinkles({
                    textDecoration: 'underline',
                    fontWeight: 'bold'
                }),
                {
                    ':hover': {
                        opacity: 0.8
                    }
                }
            ]
        }
    }
});
