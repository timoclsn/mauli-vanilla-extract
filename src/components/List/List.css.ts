import { recipe } from '@vanilla-extract/recipes';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import { createVar } from '@vanilla-extract/css';

const listStyleType = createVar();

export type Variants = RecipeVariants<typeof variants>;

export const variants = recipe({
  base: {
    paddingLeft: '1em',
    listStylePosition: 'outside',
    listStyleType: listStyleType,
  },
  variants: {
    type: {
      bullet: {
        vars: {
          [listStyleType]: 'disc',
        },
      },
      number: {
        vars: {
          [listStyleType]: 'decimal',
        },
      },
      latin: {
        vars: {
          [listStyleType]: 'lower-latin',
        },
      },
      roman: {
        vars: {
          [listStyleType]: 'lower-roman',
        },
      },
      greek: {
        vars: {
          [listStyleType]: 'lower-greek',
        },
      },
    },
  },
});
