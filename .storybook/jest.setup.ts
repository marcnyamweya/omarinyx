// This file contains setup code that will be executed before each test
import '@testing-library/jest-dom';

// Mock global objects if needed
global.fetch = jest.fn();

// Setup any global test utilities
beforeAll(() => {
  // Code to run before all tests
  console.log('Setting up Jest tests...');
});

afterAll(() => {
  // Code to run after all tests
  console.log('Completing Jest tests...');
});

// Reset mocks automatically between tests
beforeEach(() => {
  jest.clearAllMocks();
});