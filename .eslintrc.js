module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@next/next/recommended",
    "plugin:react/jsx-runtime",
    "plugin:storybook/recommended",
    "prettier",
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
    "jest.setup.js",
    "next.config.js",
    "next-sitemap.config.js",
  ],
  rules: {
    // override the rule defaults from extensions to allow devDependencies imports in Storybook stories
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/__tests__/**/*.[jt]s?(x)",
          "**/?(*.)+(spec|test).[jt]s?(x)",
          "**/*.stories.*",
          "**/.storybook/**/*.*",
        ],
        peerDependencies: true,
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          ["sibling", "parent", "index"],
          "type",
        ],
        pathGroups: [
          {
            pattern: "@*/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react", "type"],
        "newlines-between": "always",
        warnOnUnassignedImports: true,
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
