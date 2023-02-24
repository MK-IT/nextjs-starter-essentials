---
to: "<%= options.indexOf('stories') !== -1 ? `src/components/${h.changeCase.param(name)}/${h.changeCase.param(name)}.stories.tsx` : null %>"
---
<%
  var hasInterface = options.indexOf("interface") !== -1;
%>
import { Story } from "@storybook/react";

import <%= h.changeCase.pascal(name) %> from "./<%= h.changeCase.param(name) %>";
<%if (hasInterface) { -%>
import type <%= h.changeCase.pascal(name) %>Props from "./<%= h.changeCase.param(name) %>.props";
<% } -%>

export default {
  title: "components/<%= h.changeCase.pascal(name) %>",
  component: <%= h.changeCase.pascal(name) %>,
};

const Template: Story<%- hasInterface ? "<" + `${h.changeCase.pascal(name)}Props` + ">" : null %> = function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <<%= h.changeCase.pascal(name) %> {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  children: <div>Hello, World!</div>,
  text: "Hey!",
};

export const NoChildren = Template.bind({});

NoChildren.args = {
  children: undefined,
  text: "Hey!",
};

export const NoText = Template.bind({});

NoText.args = {
  children: <div>Hello, World!</div>,
};





