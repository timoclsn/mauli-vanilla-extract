import { createVar, globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import type { RecipeVariants } from '@vanilla-extract/recipes';

import { sprinkles } from '../../sprinkles.css';
import { vars } from '../../theme.css';
import { fontFamilies, fontSizes, fontWeights } from '../../typography';

const solidText = createVar();
const solidBg = createVar();
const solidBgActive = createVar();
const solidBorderFocus = createVar();
const solidBgDisabled = createVar();

const ghostText = createVar();
const ghostBorder = createVar();
const ghostBgHover = createVar();
const ghostBgActive = createVar();
const ghostTextFocus = createVar();
const ghostBorderFocus = createVar();
const ghostTextDisabled = createVar();
const ghostBorderDisabled = createVar();

const linkText = createVar();
const linkTextHover = createVar();
const linkTextActive = createVar();
const linkTextFocus = createVar();
const linkTextDisabled = createVar();

const paddingX = createVar();
const paddingY = createVar();

const base = style([
  sprinkles({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    gap: '1x',
  }),
  fontFamilies.sans,
  fontSizes['16px'].untrimmed,
  {
    lineHeight: 1,
    ':focus': {
      outline: 'none',
    },
  },
]);

export type Variants = RecipeVariants<typeof variants>;

export const variants = recipe({
  base,

  variants: {
    size: {
      normal: [
        fontWeights.bold,
        {
          vars: {
            [paddingX]: vars.space['3x'],
            [paddingY]: vars.space['2x'],
          },
        },
      ],
      small: [
        fontWeights.bold,
        {
          vars: {
            [paddingX]: vars.space['2x'],
            [paddingY]: vars.space['1x'],
          },
        },
      ],
    },

    variant: {
      solid: {
        position: 'relative',
        color: solidText,
        backgroundColor: solidBg,
        borderRadius: vars.radii.round,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        transition: 'transform 200ms ease',
        ':hover': {
          transform: 'translateY(-2px) scale(1.02)',
        },
        ':active': {
          backgroundColor: solidBgActive,
        },
        ':focus-visible': {
          boxShadow: `inset 0 0 0 2px ${solidBorderFocus}`,
        },
        ':disabled': {
          backgroundColor: solidBgDisabled,
        },
        selectors: {
          '&::after': {
            content: '',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: vars.radii.round,
            boxShadow: vars.shadows.medium,
            opacity: 0,
            transition: 'opacity 200ms ease-in-out',
          },
          '&:hover::after': {
            opacity: 1,
          },
        },
      },

      ghost: {
        color: ghostText,
        boxShadow: `inset 0 0 0 2px ${ghostBorder}`,
        borderRadius: vars.radii.round,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        ':hover': {
          backgroundColor: ghostBgHover,
        },
        ':active': {
          backgroundColor: ghostBgActive,
        },
        ':focus-visible': {
          color: ghostTextFocus,
          boxShadow: `inset 0 0 0 2px ${ghostBorderFocus}`,
        },
        ':disabled': {
          color: ghostTextDisabled,
          boxShadow: `inset 0 0 0 2px ${ghostBorderDisabled}`,
        },
      },

      link: {
        color: linkText,
        backgroundColor: 'transparent',
        ':hover': {
          color: linkTextHover,
        },
        ':active': {
          color: linkTextActive,
        },
        ':focus-visible': {
          color: linkTextFocus,
        },
        ':disabled': {
          color: linkTextDisabled,
        },
      },
    },

    color: {
      normal: {
        vars: {
          [solidText]: vars.colors.gray2,
          [solidBg]: vars.colors.gray12,
          [solidBgActive]: vars.colors.gray12,
          [solidBorderFocus]: vars.colors.gray11,
          [solidBgDisabled]: vars.colors.gray7,

          [ghostText]: vars.colors.gray12,
          [ghostBorder]: vars.colors.gray12,
          [ghostBgHover]: vars.colors.gray4,
          [ghostBgActive]: vars.colors.gray4,
          [ghostTextFocus]: vars.colors.gray11,
          [ghostBorderFocus]: vars.colors.gray11,
          [ghostTextDisabled]: vars.colors.gray7,
          [ghostBorderDisabled]: vars.colors.gray7,

          [linkText]: vars.colors.gray12,
          [linkTextHover]: vars.colors.gray11,
          [linkTextActive]: vars.colors.gray11,
          [linkTextFocus]: vars.colors.gray11,
          [linkTextDisabled]: vars.colors.gray7,
        },
      },

      highlight: {
        vars: {
          [solidText]: vars.colors.indigo2,
          [solidBg]: vars.colors.indigo9,
          [solidBgActive]: vars.colors.indigo11,
          [solidBorderFocus]: vars.colors.indigo12,
          [solidBgDisabled]: vars.colors.indigo7,

          [ghostText]: vars.colors.indigo9,
          [ghostBorder]: vars.colors.indigo9,
          [ghostBgHover]: vars.colors.indigo4,
          [ghostBgActive]: vars.colors.indigo4,
          [ghostTextFocus]: vars.colors.indigo11,
          [ghostBorderFocus]: vars.colors.indigo11,
          [ghostTextDisabled]: vars.colors.indigo7,
          [ghostBorderDisabled]: vars.colors.indigo7,

          [linkText]: vars.colors.indigo9,
          [linkTextHover]: vars.colors.indigo12,
          [linkTextActive]: vars.colors.indigo12,
          [linkTextFocus]: vars.colors.indigo12,
          [linkTextDisabled]: vars.colors.indigo7,
        },
      },
    },
  },
});

globalStyle(`${base} > svg`, {
  display: 'block',
  width: '16px',
  height: '16px',
});
