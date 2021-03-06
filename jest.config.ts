import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

export default {
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx', 'json'],
  rootDir: '.',
  testRegex: '.*\\.(test|spec)\\.(ts|js|tsx|jsx)$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverageFrom: ['src/**/*.(ts|tsx)', '!src/index.tsx'],
  coveragePathIgnorePatterns: ['node_modules'],
  coverageDirectory: './coverage',
  testEnvironment: 'jsdom',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src/',
  }),
};
