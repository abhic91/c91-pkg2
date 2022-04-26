import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Modal from "./Modal";
import { Button } from "@abhic91/atoms";

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
export const Default = Template.bind({});
Default.args = {
  noBackdrop: false,
  dialogTitle: <h6>Modal Title</h6>,
  dialogDescription: "Content describing the modal",
  noCloseBtn: false,
  children: "The acutal content in the modal",
  //   stickyFooterContent?: React.ReactNode;
};
