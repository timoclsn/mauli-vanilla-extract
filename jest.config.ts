import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  globals: {
    'ts-jest': {
      babelConfig: {
        plugins: ['@vanilla-extract/babel-plugin'],
      },
    },
  },
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  testEnvironment: 'jsdom',
  testRegex: '.*\\.test\\.(ts|tsx)$',
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    '!**/index.ts',
    '!**/*.css.ts',
  ],
};

export default config;
