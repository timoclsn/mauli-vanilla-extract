import { recipe } from '@vanilla-extract/recipes';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import { createVar, style } from '@vanilla-extract/css';

import { pct } from '../../utils';

const scale = createVar();

const fraction = style({
  flex: `0 0 ${scale}`,
});

export type Variants = RecipeVariants<typeof variants>;

export const variants = recipe({
  variants: {
    width: {
      content: {
        width: 'auto',
        flexShrink: 0,
      },
      '1/2': [
        {
          vars: {
            [scale]: pct(1 / 2),
          },
        },
        fraction,
      ],
      '1/3': [
        {
          vars: {
            [scale]: pct(1 / 3),
          },
        },
        fraction,
      ],
      '2/3': [
        {
          vars: {
            [scale]: pct(2 / 3),
          },
        },
        fraction,
      ],
      '1/4': [
        {
          vars: {
            [scale]: pct(1 / 4),
          },
        },
        fraction,
      ],
      '3/4': [
        {
          vars: {
            [scale]: pct(3 / 4),
          },
        },
        fraction,
      ],
      '1/5': [
        {
          vars: {
            [scale]: pct(1 / 5),
          },
        },
        fraction,
      ],
      '2/5': [
        {
          vars: {
            [scale]: pct(2 / 5),
          },
        },
        fraction,
      ],
      '3/5': [
        {
          vars: {
            [scale]: pct(3 / 5),
          },
        },
        fraction,
      ],
      '4/5': [
        {
          vars: {
            [scale]: pct(4 / 5),
          },
        },
        fraction,
      ],
    },
  },
});
