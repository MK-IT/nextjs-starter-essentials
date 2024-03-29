import Header from "./header";

import type { Story } from "@storybook/react";

export default {
  title: "layouts/Header",
  component: Header,
};

const Template: Story = function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Header {...args} />;
};

export const Default = Template.bind({});

Default.args = {};
