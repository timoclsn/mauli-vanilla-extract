import { createVar, keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import type { RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '../../theme.css';

const color = createVar();
const highlightColor = createVar();

const pulse = keyframes({
  '100%': {
    transform: 'translateX(100%)',
  },
});

export type Varaints = RecipeVariants<typeof variants>;

export const variants = recipe({
  base: {
    borderRadius: '4px',
    lineHeight: '1',
    backgroundColor: color,
    WebkitTransform: 'translate3d(0, 0, 0)', // Fix for Safari not respecting overflow: hidden
    selectors: {
      '&::before': {
        content: ' ',
        display: 'block',
        position: 'absolute',
        left: 0,
        right: 0,
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `linear-gradient(90deg, ${color}, ${highlightColor}, ${color})`,
        transform: 'translateX(-100%)',
        animation: `${pulse} 1.2s ease-in-out infinite`,
      },
    },
  },

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
