import React from 'react';

import { Text } from '../Text';
import type { TextProps } from '../Text';
import { LevelContext } from './HeadingLevel';
import * as styles from './Heading.css';

const levelToFontSize = {
  1: '60px',
  2: '36px',
  3: '24px',
  4: '16px',
} as const;

const HeadingLevel = Object.keys(levelToFontSize);
const LowestLevel = parseInt(HeadingLevel[HeadingLevel.length - 1]);

type HeadingLevel = keyof typeof levelToFontSize;

interface Props {
  children: TextProps['children'];
  id?: string;
  level?: HeadingLevel;
  color?: TextProps['color'];
  className?: TextProps['className'];
}

export function Heading({ level = 2, className, ...props }: Props) {
  return (
    <>
      <LevelContext.Consumer>
        {(accessibilityLevel) => {
          if (accessibilityLevel < 1) {
            throw new Error(
              'Heading component must be a descendant of HeadingLevel component.'
            );
          }
          if (accessibilityLevel > LowestLevel || accessibilityLevel > 6) {
            throw new Error(
              `HeadingLevel cannot be nested ${accessibilityLevel} times. The maximum is ${LowestLevel} levels.`
            );
          }
          return (
            <Text
              as={`h${accessibilityLevel as HeadingLevel}`}
              size={levelToFontSize[level]}
              weight="bold"
              className={[styles.base, className]}
              {...props}
            />
          );
        }}
      </LevelContext.Consumer>
    </>
  );
}
