import { createVar, keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import type { RecipeVariants } from '@vanilla-extract/recipes';

import { sprinkles } from '../../sprinkles.css';
import { vars } from '../../theme.css';

const color = createVar();
const highlightColor = createVar();

const pulse = keyframes({
  '0%': {
    backgroundPosition: '-200px 0',
  },
  '100%': {
    backgroundPosition: 'calc(200px + 100%) 0',
  },
});

export type Varaints = RecipeVariants<typeof variants>;

export const variants = recipe({
  base: [
    sprinkles({
      display: 'inline-block',
    }),
    {
      borderRadius: '4px',
      lineHeight: '1',
      backgroundColor: color,
      backgroundImage: `linear-gradient(90deg, ${color}, ${highlightColor}, ${color})`,
      backgroundSize: '200px 100%',
      backgroundRepeat: 'no-repeat',
      animation: `${pulse} 1.2s ease-in-out infinite`,
    },
  ],

  variants: {
    color: {
      normal: {
        vars: {
          [color]: vars.colors.gray7,
          [highlightColor]: vars.colors.gray6,
        },
      },
      highlight: {
        vars: {
          [color]: vars.colors.indigo7,
          [highlightColor]: vars.colors.indigo6,
        },
      },
    },
    circle: {
      true: {
        borderRadius: vars.radii.round,
      },
    },
  },
});
