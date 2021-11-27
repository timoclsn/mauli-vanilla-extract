import { createTextStyle } from '@capsizecss/vanilla-extract';
import { style, styleVariants } from '@vanilla-extract/css';
import { mapValues } from 'lodash';

import { vars } from '../theme.css';

type Vars = typeof vars;
type TextDefinition = Vars['fontSizes'];
type TypographicDefinition = TextDefinition[keyof TextDefinition];

const makeTypographyRules = (textDefinition: TypographicDefinition) => {
  return {
    untrimmed: style({
      fontSize: textDefinition.fontSize,
    }),
    trimmed: createTextStyle(textDefinition),
  };
};

export const fontFamilies = styleVariants(vars.fonts, (family) => ({
  fontFamily: family,
}));

export const fontWeights = styleVariants(vars.fontWeights, (weight) => ({
  fontWeight: weight,
}));

export const fontSizes = mapValues(vars.fontSizes, (size) =>
  makeTypographyRules(size)
);
