import { recipe } from '@vanilla-extract/recipes';
import type { RecipeVariants } from '@vanilla-extract/recipes';

import { sprinkles } from '../../sprinkles.css';
import { fontWeights } from '../../typography';

export type Variants = RecipeVariants<typeof variants>;

export const variants = recipe({
  base: {
    color: 'inherit',
  },

  variants: {
    variant: {
      normal: [
        sprinkles({
          textDecoration: 'underline',
        }),
        {
          ':hover': {
            opacity: 0.8,
          },
        },
      ],
      highlight: [
        sprinkles({
          textDecoration: 'underline',
        }),
        fontWeights.bold,
        {
          ':hover': {
            opacity: 0.8,
          },
        },
      ],
    },
  },
});
