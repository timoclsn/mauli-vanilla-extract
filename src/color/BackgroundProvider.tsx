import React from 'react';

import { ColorModeProvider, useColorMode } from './ColorModeContext';
import type { BackgroundColor } from './color';

interface BackgroundProviderProps {
  color: BackgroundColor;
  children: JSX.Element;
}

export function BackgroundProvider({
  color,
  children,
}: BackgroundProviderProps) {
  const { colorMode, backgroundColors } = useColorMode();
  const background = backgroundColors[color];

  return background.mode !== colorMode ? (
    <ColorModeProvider value={background.mode}>{children}</ColorModeProvider>
  ) : (
    children
  );
}
