import { Story } from "@storybook/react";

import Page from "./page";
import type PageProps from "./page.props";

export default {
  title: "layouts/Page",
  component: Page,
};

const Template: Story<PageProps> = function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Page {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  children: <div>Hello, World!</div>,
};

export const NoChildren = Template.bind({});

NoChildren.args = { children: undefined };

export const NoHeader = Template.bind({});

NoHeader.args = { hasHeader: false };

export const NoFooter = Template.bind({});

NoFooter.args = { hasFooter: false };
