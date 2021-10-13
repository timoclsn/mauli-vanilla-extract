import { recipe } from '@vanilla-extract/recipes';
import type { RecipeVariants } from '@vanilla-extract/recipes';

export type Varaints = RecipeVariants<typeof variants>;

export const variants = recipe({
  base: {
    paddingLeft: '1em',
    listStylePosition: 'outside',
  },
  variants: {
    type: {
      bullet: {
        listStyleType: 'disc',
      },
      number: {
        listStyleType: 'decimal',
      },
      latin: {
        listStyleType: 'lower-latin',
      },
      roman: {
        listStyleType: 'lower-roman',
      },
      greek: {
        listStyleType: 'lower-greek',
      },
    },
  },
});
