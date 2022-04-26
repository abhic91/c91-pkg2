import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextField from "./TextField";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Core/TextField",
  component: TextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
  return (
    <div style={{ width: "400px" }}>
      <TextField
        {...args}
        inputTextProps={{ id: "id", ...args.inputTextProps }}
      />
    </div>
  );
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof TextField> = (args) => {
//   const [value, setValue] = useState("ff");
//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
//     setValue(e.target.value);
//   return (
//     <TextField
//       {...args}
//       inputTextProps={{ id: "id", value: value, onChange: onChange }}
//     />
//   );
// };

const MailIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.83333 7.49999L8.95833 9.99999C9.56667 10.4833 10.425 10.4833 11.0417 9.99999L14.1667 7.49999M17.5 14.1667V5.83332C17.5 4.90832 16.75 4.16666 15.8333 4.16666H4.16667C3.24167 4.16666 2.5 4.90832 2.5 5.83332V14.1667C2.5 15.0833 3.24167 15.8333 4.16667 15.8333H15.8333C16.75 15.8333 17.5 15.0833 17.5 14.1667Z"
      stroke="#6A6A75"
      strokeWidth="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.05992 6C6.21665 5.55445 6.52602 5.17874 6.93322 4.93942C7.34042 4.70011 7.81918 4.61263 8.2847 4.69248C8.75022 4.77233 9.17246 5.01435 9.47664 5.37569C9.78081 5.73702 9.94729 6.19435 9.94659 6.66667C9.94659 8 7.94659 8.66667 7.94659 8.66667M7.99992 11.3333H8.00659M14.6666 8C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8C1.33325 4.3181 4.31802 1.33334 7.99992 1.33334C11.6818 1.33334 14.6666 4.3181 14.6666 8Z"
      stroke="#83838C"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Default = Template.bind({});
Default.args = {
  id: "default-text-field",
  label: "Name",
  inputTextProps: {
    placeholder: "Enter name",
    disabled: false,
  },
  errorMessage: "",
};

export const HintText = Template.bind({});
HintText.args = { ...Default.args, hintText: "Enter name" };

export const LeadingInputIcon = Template.bind({});
LeadingInputIcon.args = {
  id: "leading",
  label: "Email",
  inputTextProps: {
    placeholder: "Enter email",
    disabled: false,
  },
  errorMessage: "",
  hintText: "Enter your email",
  leadingInputAdornment: <MailIcon />,
};

export const LeadingInputText = Template.bind({});
LeadingInputText.args = {
  id: "leading",
  label: "Email",
  inputTextProps: {
    placeholder: "Enter email",
    disabled: false,
  },
  errorMessage: "",
  hintText: "Enter your email",
  leadingInputAdornment: "$",
};

export const LeadingInputDropdown = Template.bind({});
LeadingInputDropdown.args = {
  id: "leading",
  label: "Phone",
  inputTextProps: {
    placeholder: "Enter phone",
    disabled: false,
  },
  errorMessage: "",
  leadingInputAdornment: (
    <select
      aria-label="Select Dialing code"
      style={{ border: "none", backgroundColor: "transparent" }}
    >
      <option>+91</option>
      <option>+122</option>
    </select>
  ),
};

export const Error = Template.bind({});
Error.args = {
  id: "error-text-field",
  label: "Email",
  inputTextProps: {
    placeholder: "Enter email",
    disabled: false,
  },
  errorMessage: "Enter a valid email",
  hintText: "Enter your email",
  leadingInputAdornment: <MailIcon />,
};

export const TrailingInputText = Template.bind({});
TrailingInputText.args = {
  id: "leading",
  label: "Email",
  inputTextProps: {
    placeholder: "Enter email",
    disabled: false,
  },
  errorMessage: "",
  hintText: "Enter your email",
  trailingInputAdornment: "$",
};
export const TrailingInputMultiple = Template.bind({});
TrailingInputMultiple.args = {
  id: "leading",
  label: "Amount",
  inputTextProps: {
    placeholder: "Enter amount",
    disabled: false,
  },
  errorMessage: "",
  hintText: "Enter amount to load",
  trailingInputAdornment: [
    <InfoIcon />,
    <select
      aria-label="Select currency"
      style={{
        border: "none",
        backgroundColor: "transparent",
        marginLeft: "10px",
      }}
    >
      <option>INR</option>
      <option>USD</option>
    </select>,
  ],
};

export const LeadingAndTrailing = Template.bind({});

LeadingAndTrailing.args = {
  id: "leading-and-trailing",
  ...LeadingInputIcon.args,
  ...TrailingInputText.args,
  ...TrailingInputMultiple.args,
};
