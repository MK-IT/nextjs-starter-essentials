module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@next/next/recommended",
    "prettier",
    "plugin:react/jsx-runtime",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  // silence TS lint error on JS files
  ignorePatterns: [".eslintrc.js", "next.config.js", "next-sitemap.config.js"],
  rules: {
    "react/jsx-props-no-spreading": "warn",
    "react/require-default-props": "off",
  },
};
