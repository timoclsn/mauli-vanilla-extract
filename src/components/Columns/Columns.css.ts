import { globalStyle, style } from '@vanilla-extract/css';

export const base = style({});

globalStyle(`${base} *`, {
  flex: '1',
});
