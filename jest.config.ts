import type { Config } from 'jest';

const config: Config = {
  rootDir: '.', 
  moduleFileExtensions: ['js', 'json', 'ts'],

  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },

  testEnvironment: 'node',

  testRegex: '.*\\.test\\.ts$',

 
  testPathIgnorePatterns: ['/node_modules/'],

  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],

  coverageThreshold: {
    global: {
      statements: 80,
      branches: 70,
      functions: 80,
      lines: 80,
    },
  },
};

export default config;
