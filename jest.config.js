import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  testEnvironment: 'jest-environment-node',
}

export default createJestConfig(config);
