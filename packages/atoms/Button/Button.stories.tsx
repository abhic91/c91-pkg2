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
Contained.args = {
  variant: "primary-contained",
  children: "Contained button",
};
Contained.parameters = { pseudo: {} };

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const SemiTransparent = Template.bind({});
SemiTransparent.args = {
  variant: "primary-semi-transparent",
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

export const NeutralLink = Template.bind({});
NeutralLink.args = {
  variant: "neutral-link",
  children: "Neutral link",
};

export const ErrorContained = Template.bind({});
ErrorContained.args = {
  variant: "error-contained",
  children: "Error Contained",
};

export const ErrorSemiTransparent = Template.bind({});
ErrorSemiTransparent.args = {
  variant: "error-semi-transparent",
  children: "Error Semi Transparent",
};

export const ErrorOutlined = Template.bind({});
ErrorOutlined.args = {
  variant: "error-outlined",
  children: "Error Outlined",
};

export const ErrorTextOnly = Template.bind({});
ErrorTextOnly.args = {
  variant: "error-text-only",
  children: "Error Text only",
};

export const ErrorLink = Template.bind({});
ErrorLink.args = {
  variant: "error-link",
  children: "Error Link",
};
