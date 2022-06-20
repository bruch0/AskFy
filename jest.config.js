const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
    "!<rootDir>/src/pages/**",
    "!<rootDir>/src/presentation/**/index.ts",
  ],
  globalSetup: "<rootDir>/setupTestEnv.ts",
};

module.exports = createJestConfig(customJestConfig);
