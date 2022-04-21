import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import OtpInput from "./OtpInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Core/OtpInput",
  component: OtpInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onChange: { action: "changed" },
    onEnterPressed: { action: "enter" },
    setOTPValue: { action: "OTP value set" },
  },
} as ComponentMeta<typeof OtpInput>;

const Template: ComponentStory<typeof OtpInput> = (args) => {
  return (
    <div style={{ width: "400px" }}>
      <OtpInput {...args} />
    </div>
  );
};
export const Default = Template.bind({});
Default.args = {
  noOfInputs: 6,
  clearOTPKey: 1,
  isErrorProp: false,
};
