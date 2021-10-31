import { createVar, style } from '@vanilla-extract/css';

import { vars } from '../../theme.css';

const spacing = createVar();

export const base = style({
  vars: {
    [spacing]: vars.space['1x'],
  },
  selectors: {
    '&:not(:first-of-type)': {
      marginLeft: spacing,
    },
    '&:not(:first-of-type)&::before': {
      content: '',
      display: 'inline-block',
      transform: 'rotate(15deg)',
      borderRight: '1px solid',
      height: '0.8em',
      opacity: 0.25,
      marginRight: spacing,
    },
  },
});

export const link = style({
  ':hover': {
    textDecoration: 'underline',
  },
});
