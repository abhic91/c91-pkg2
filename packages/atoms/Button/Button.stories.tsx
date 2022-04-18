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

//TODO: SHOW ALL PROPS ALONG WITH DEFAULT BTN PROPS IN STORY

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Contained.args = {
  variant: "contained",
  children: "Contained button",
};
Contained.parameters = { pseudo: {} };

export const SemiTransparent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SemiTransparent.args = {
  variant: "semi-transparent",
  children: "Lighter button",
};

export const TextOnly = Template.bind({});

TextOnly.args = {
  variant: "primary-text-only",
  children: "Text only button",
};
export const PrimaryLink = Template.bind({});

PrimaryLink.args = {
  variant: "primary-link",
  children: "Primary link",
};
export const NeutralOutlined = Template.bind({});

NeutralOutlined.args = {
  variant: "neutral-outlined",
  children: "Neutral outlined",
};
