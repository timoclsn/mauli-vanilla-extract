import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

import { palettes } from './color';
import type { ColorMode, Palette } from './color';

function contextValueForColorMode(colorMode: ColorMode): ColorModeContextValue {
  return {
    colorMode,
    ...palettes[colorMode],
  };
}

interface ColorModeContextValue extends Palette {
  colorMode: ColorMode;
}

const ColorModeContext = createContext<ColorModeContextValue>(
  contextValueForColorMode('light')
);

export const useColorMode = () => useContext(ColorModeContext);

interface Props {
  value: ColorMode;
  children: ReactNode;
}

export function ColorModeProvider({ value: colorMode, children }: Props) {
  return (
    <ColorModeContext.Provider value={contextValueForColorMode(colorMode)}>
      {children}
    </ColorModeContext.Provider>
  );
}
