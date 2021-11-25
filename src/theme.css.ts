import { createGlobalTheme } from '@vanilla-extract/css';
import { precomputeValues } from '@capsizecss/core';
import fontMetrics from '@capsizecss/metrics/inter';
import { mapValues } from 'lodash';

import {
  colors,
  contentWidth,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  shadows,
  sizes,
  space,
} from './tokens';

export const vars = createGlobalTheme(':root', {
  fonts,
  fontSizes: mapValues(fontSizes, (fontObj) =>
    precomputeValues({
      fontSize: fontObj.fontSize,
      leading: fontObj.lineHeight,
      fontMetrics,
    })
  ),
  fontWeights,
  space,
  sizes,
  radii,
  contentWidth,
  colors,
  shadows,
});
