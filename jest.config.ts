import type { Config } from 'jest';

const config: Config = {
  moduleDirectories: ['node_modules', '.'],
  setupFilesAfterEnv: ['<rootDir>/.storybook/jest.setup.ts'],
};

export default config;
