import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Core/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Contained.args = {
  variant: "contained",
  children: "Contained button",
};
export const Outlined = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Outlined.args = {
  variant: "outlined",
  children: "Outlined button",
};
