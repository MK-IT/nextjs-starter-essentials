const path = require("path");

module.exports = {
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@root": path.resolve(__dirname, "../"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@features": path.resolve(__dirname, "../src/features"),
      "@hooks": path.resolve(__dirname, "../src/hooks"),
      "@interfaces": path.resolve(__dirname, "../src/interfaces"),
      "@layouts": path.resolve(__dirname, "../src/layouts"),
      "@pages": path.resolve(__dirname, "../src/pages"),
      "@styles": path.resolve(__dirname, "../src/styles"),
      "@utils": path.resolve(__dirname, "../src/utils"),
      "@images/*": path.resolve(__dirname, "..public/images"),
    };

    return config;
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "storybook-addon-next",
    "@storybook/addon-links",
    "@storybook/addon-essentials", // includes the configuration for several addons as well as @storybook/addon-actions
    "@storybook/addon-interactions", // must be after @storybook/addon-actions or @storybook/addon-essentials
    "@storybook/addon-viewport", // used for integrating custom viewport
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
