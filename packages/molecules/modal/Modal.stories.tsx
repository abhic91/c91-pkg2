import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Modal from "./Modal";
import { Button, TextField } from "@abhic91/atoms";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Core/Modal",
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  //   const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* <Button onClick={() => setIsOpen(true)}>Open</Button> */}
      <Modal {...args} DialogTrigger={<Button>Open</Button>} />
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <div>
        <TextField
          label="Username"
          inputTextProps={{ id: "username", placeholder: "Enter username" }}
          wrapperProps={{ style: { margin: "1rem 0" } }}
        />
        <TextField
          label="Password"
          inputTextProps={{
            id: "password",
            type: "password",
            placeholder: "Enter password",
          }}
          wrapperProps={{ style: { margin: "1rem 0" } }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="neutral-text-only">Cancel</Button>
        <Button style={{ marginLeft: "10px" }}>Login</Button>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  noBackdrop: false,
  dialogTitle: "Login",
  dialogDescription: "Content describing the modal",
  noCloseBtn: false,
  children: <Login />,
  //   stickyFooterContent: <Button>Login</Button>,
};
