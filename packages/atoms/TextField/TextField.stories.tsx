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

export const Default = Template.bind({});
Default.args = {
  id: "default-text-field",
  label: "Name",
  inputTextProps: {
    placeholder: "Enter name",
    disabled: false,
  },
  error: false,
  errorMessage: "",
  hintText: "Enter your name",
};
