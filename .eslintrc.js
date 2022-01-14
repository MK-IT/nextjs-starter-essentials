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
  parserOptions: {
    project: "./tsconfig.json",
  },
  // silence TS lint error on JS files
  ignorePatterns: [".eslintrc.js", "next.config.js", "next-sitemap.config.js"],
  rules: {
    // avoid props spreading or silence on specific lines of code with `// eslint-disable-line`
    "react/jsx-props-no-spreading": "warn",
  },
};
