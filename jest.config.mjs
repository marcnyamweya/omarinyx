   // Add any custom config to be passed to Jest
    /** @type {import('jest').Config} */
    const customJestConfig = {
      setupFilesAfterEnv: ['<rootDir>/.storybook/jest.setup.ts'], // Your existing setup
      testEnvironment: 'jest-environment-jsdom',
      moduleDirectories: ['node_modules', '<rootDir>/'], // Ensures local modules are found
      // Add any module name mappers if you use path aliases
      // moduleNameMapper: {
      //   '^@/components/(.*)$': '<rootDir>/components/$1',
      // },
    }

    // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
    module.exports = createJestConfig(customJestConfig)
