import { createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import type { RecipeVariants } from '@vanilla-extract/recipes';

import { sprinkles } from '../../sprinkles.css';

const width = createVar();

export type Varaints = RecipeVariants<typeof variants>;

export const variants = recipe({
  base: {
    flex: `0 0 ${width}`,
  },
  variants: {
    width: {
      content: [sprinkles({ width: 'full', flexShrink: 0 })],
      '1/2': {
        vars: {
          [width]: `${(1 / 2) * 100}%`,
        },
      },
      '1/3': {
        vars: {
          [width]: `${(1 / 3) * 100}%`,
        },
      },
      '2/3': {
        vars: {
          [width]: `${(2 / 3) * 100}%`,
        },
      },
      '1/4': {
        vars: {
          [width]: `${(1 / 4) * 100}%`,
        },
      },
      '3/4': {
        vars: {
          [width]: `${(3 / 4) * 100}%`,
        },
      },
      '1/5': {
        vars: {
          [width]: `${(1 / 5) * 100}%`,
        },
      },
      '2/5': {
        vars: {
          [width]: `${(2 / 5) * 100}%`,
        },
      },
      '3/5': {
        vars: {
          [width]: `${(3 / 5) * 100}%`,
        },
      },
      '4/5': {
        vars: {
          [width]: `${(4 / 5) * 100}%`,
        },
      },
    },
  },
});
