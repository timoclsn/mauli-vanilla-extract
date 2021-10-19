import { globalStyle, style } from '@vanilla-extract/css';

export const base = style({});

globalStyle(`${base} > *`, {
  width: '100%',
  minWidth: 0,
});
