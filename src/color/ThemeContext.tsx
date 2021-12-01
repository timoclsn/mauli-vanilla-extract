import React from 'react';
import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

import { ColorModeProvider } from './ColorModeContext';

interface ThemeContext {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const ThemeContext = createContext<Partial<ThemeContext>>({});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProvider {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProvider) {
  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState<boolean>(darkThemeMq.matches);

  useEffect(() => {
    darkThemeMq.addEventListener('change', (e) => setDarkMode(e.matches));

    return () =>
      darkThemeMq.removeEventListener('change', (e) => setDarkMode(e.matches));
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      <ColorModeProvider value={darkMode ? 'dark' : 'light'}>
        {children}
      </ColorModeProvider>
    </ThemeContext.Provider>
  );
}
