import { mapValues } from 'lodash';

import type { Color } from '../tokens';

export type ColorMode = 'light' | 'dark';

export type ContextualColorValue<Value> = {
  light: Value;
  dark: Value;
};

export type ForegroundColor = 'highlight' | 'primary';

export const foregroundColors: Record<
  ForegroundColor,
  Color | ContextualColorValue<Color>
> = {
  highlight: {
    light: 'indigo9',
    dark: 'indigo11',
  },
  primary: {
    light: 'gray12',
    dark: 'gray1',
  },
};

export type BackgroundColor = 'highlight' | 'primary' | 'secondary';

export type BackgroundColorValue = {
  color: Color;
  mode: ColorMode;
};

export const backgroundColors: Record<
  BackgroundColor,
  BackgroundColorValue | ContextualColorValue<BackgroundColorValue>
> = {
  highlight: {
    light: {
      color: 'indigo9',
      mode: 'dark',
    },
    dark: {
      color: 'indigo11',
      mode: 'dark',
    },
  },
  primary: {
    light: {
      color: 'gray1',
      mode: 'light',
    },
    dark: {
      color: 'gray12',
      mode: 'dark',
    },
  },
  secondary: {
    light: {
      color: 'gray3',
      mode: 'light',
    },
    dark: {
      color: 'gray11',
      mode: 'dark',
    },
  },
};

export type Palette = {
  backgroundColors: Record<BackgroundColor, BackgroundColorValue>;
  foregroundColors: Record<ForegroundColor, Color>;
};

function createPalette(colorMode: ColorMode): Palette {
  return {
    backgroundColors: mapValues(backgroundColors, (value) => {
      if ('color' in value) {
        return value;
      }

      return value[colorMode];
    }),
    foregroundColors: mapValues(foregroundColors, (value) => {
      if (typeof value === 'string') {
        return value;
      }
      return value[colorMode];
    }),
  };
}

export const palettes: Record<ColorMode, Palette> = {
  dark: createPalette('dark'),
  light: createPalette('light'),
};
