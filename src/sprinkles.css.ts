import mapValues from 'lodash/mapValues';
import { createStyleObject } from '@capsizecss/core';
import type { ConditionalValue } from '@vanilla-extract/sprinkles';
import {
  defineProperties,
  createSprinkles,
  createMapValueFn,
} from '@vanilla-extract/sprinkles';

import { vars } from './theme.css';
import { breakpoints } from './tokens';

const responsiveProperties = defineProperties({
  conditions: {
    default: {},
    ...mapValues(breakpoints, (breakpoint) => ({
      '@media': `screen and (min-width: ${breakpoint})`,
    })),
  },
  defaultCondition: 'default',
  properties: {
    position: ['absolute', 'relative', 'fixed'],
    display: ['none', 'block', 'inline', 'inline-block', 'flex', 'inline-flex'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: { ...vars.space, auto: 'auto' },
    marginRight: { ...vars.space, auto: 'auto' },
    gap: { ...vars.space, none: 'none' },
    opacity: [0, 1],
    maxWidth: vars.contentWidth,
    fontSize: mapValues(vars.fontSizes, (fontSize) =>
      createStyleObject(fontSize)
    ),
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
});

export type ResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveProperties,
  Value
>;
export const mapResponsiveValue = createMapValueFn(responsiveProperties);

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: vars.colors,
    background: vars.colors,
  },
});

export type ColorValue<Value extends string | number> = ConditionalValue<
  typeof colorProperties,
  Value
>;

export const mapColorValue = createMapValueFn(colorProperties);

const unconditionalProperties = defineProperties({
  properties: {
    flexWrap: ['wrap', 'nowrap'],
    top: [0],
    bottom: [0],
    left: [0],
    right: [0],
    zIndex: [-1, 0, 1],
    width: vars.sizes,
    height: vars.sizes,
    borderRadius: vars.radii,
    cursor: ['pointer'],
    fontFamily: vars.fonts,
    fontWeight: vars.fontWeights,
    textDecoration: ['none', 'underline', 'line-through'],
    textTransform: ['uppercase', 'lowercase', 'capitalize'],
    textAlign: ['left', 'center', 'right'],
    textOverflow: ['ellipsis'],
    overflow: ['hidden'],
    whiteSpace: ['nowrap'],
    boxShadow: vars.shadows,
  },
});

export type Sprinkles = Parameters<typeof sprinkles>[0];

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties,
  unconditionalProperties
);
