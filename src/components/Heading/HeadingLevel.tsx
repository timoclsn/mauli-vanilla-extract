import React, { createContext } from 'react';
import type { ReactNode } from 'react';

export const LevelContext = createContext<number>(0);

interface Props {
  children: ReactNode;
}

export function HeadingLevel({ children }: Props) {
  return (
    <LevelContext.Consumer>
      {(accessibilityLevel) => (
        <LevelContext.Provider value={accessibilityLevel + 1}>
          {children}
        </LevelContext.Provider>
      )}
    </LevelContext.Consumer>
  );
}
