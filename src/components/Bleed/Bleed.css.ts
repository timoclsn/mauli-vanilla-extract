import { createVar } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { recipe } from '@vanilla-extract/recipes';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import mapValues from 'lodash/mapValues';

import { vars } from '../../theme.css';

const width = createVar();

export type Varaints = RecipeVariants<typeof variants>;

export const variants = recipe({
  base: {
    width: width,
    marginLeft: `calc(50% - ${calc.divide(width, 2)})`,
  },
  variants: {
    width: {
      full: {
        vars: {
          [width]: '100vw',
        },
      },
      ...mapValues(vars.contentWidth, (contentWidth) => {
        return {
          vars: {
            [width]: contentWidth,
          },
        };
      }),
    },
  },
});
