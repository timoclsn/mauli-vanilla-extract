import React from 'react';

import { Text } from '../Text';
import type { TextProps } from '../Text';
import { LevelContext } from './HeadingLevel';

const levelToFontSize = {
  1: '60px',
  2: '36px',
  3: '24px',
  4: '16px',
} as const;

const HeadingLevel = Object.keys(levelToFontSize);

type HeadingLevel = keyof typeof levelToFontSize;

interface Props {
  children: TextProps['children'];
  level?: HeadingLevel;
  color?: TextProps['color'];
  className?: string;
}

export function Heading({
  children,
  level = 2,
  color = 'highlight',
  ...props
}: Props) {
  return (
    <>
      <LevelContext.Consumer>
        {(accessibilityLevel) => {
          if (accessibilityLevel < parseInt(HeadingLevel[0])) {
            throw new Error(
              'Heading component must be a descendant of HeadingLevel component.'
            );
          }
          if (
            accessibilityLevel >
              parseInt(HeadingLevel[HeadingLevel.length - 1]) ||
            accessibilityLevel > 6
          ) {
            throw new Error(
              `HeadingLevel cannot be nested ${accessibilityLevel} times. The maximum is ${
                HeadingLevel[HeadingLevel.length - 1]
              } levels.`
            );
          }
          return (
            <Text
              as={`h${accessibilityLevel as HeadingLevel}`}
              size={levelToFontSize[level]}
              weight="bold"
              color={color}
              {...props}
            >
              {children}
            </Text>
          );
        }}
      </LevelContext.Consumer>
    </>
  );
}
