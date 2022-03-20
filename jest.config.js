const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  // Handle module aliases (this will be automatically configured for you soon)
  moduleNameMapper: {
    "^@root/(.*)$": "<rootDir>/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@layouts/(.*)$": "<rootDir>/src/layouts/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@types/(.*)$": "<rootDir>/src/types/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
