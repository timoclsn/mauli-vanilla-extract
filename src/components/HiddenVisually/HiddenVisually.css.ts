import { style } from '@vanilla-extract/css';

import { sprinkles } from '../../sprinkles.css';

export const base = style([
  sprinkles({
    overflow: 'hidden',
  }),
  {
    width: 1,
    height: 1,
    clip: 'rect(1px, 1px, 1px, 1px)',
    whiteSpace: 'nowrap',
  },
]);
