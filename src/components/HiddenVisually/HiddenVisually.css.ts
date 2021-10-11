import { style } from '@vanilla-extract/css';

import { sprinkles } from '../../sprinkles.css';

export const root = style([
    sprinkles({
        position: 'absolute',
        overflow: 'hidden'
    }),
    {
        width: 1,
        height: 1,
        clip: 'rect(1px, 1px, 1px, 1px)',
        whiteSpace: 'nowrap'
    }
]);
