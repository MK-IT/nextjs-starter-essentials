module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@next/next/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
    "plugin:react/jsx-runtime",
  ],
  plugins: ["testing-library"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
  // silence TS lint error on JS files
  ignorePatterns: [
    ".eslintrc.js",
    "jest.config.js",
    "next.config.js",
    "next-sitemap.config.js",
  ],
  rules: {
    // avoid props spreading or silence on specific lines of code with `// eslint-disable-line`
    "react/jsx-props-no-spreading": "warn",
  },
};
