import type { Story } from "@storybook/react";
import Header, { HeaderProps } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
};

const Template: Story<HeaderProps> = function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Header {...args} />;
};

export const Full = Template.bind({});

Full.args = {
  user: {
    email: "john@doe.com",
    name: "John Doe",
  },
  variant: "full",
};

export const Compact = Template.bind({});

Compact.args = {
  user: {
    email: "john@doe.com",
    name: "John Doe",
  },
  variant: "burger",
};
