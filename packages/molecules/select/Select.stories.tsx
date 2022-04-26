import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SelectDropdown from "./Select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Core/Select",
  component: SelectDropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof SelectDropdown>;

const Template: ComponentStory<typeof SelectDropdown> = (args) => {
  const [dropdownItems, setDropdownItems] = useState(args.items);
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div style={{ width: "400px" }}>
      <SelectDropdown
        {...args}
        items={dropdownItems}
        setSelectedItem={(item) => {
          setSelectedItem(item);
        }}
      />
    </div>
  );
};

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6667 5L7.50004 14.1667L3.33337 10"
      stroke="#7D57FD"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const Default = Template.bind({});
const items = [
  { id: "1", name: "one" },
  { id: "2", name: "two" },
  { id: "3", name: "o" },
  { id: "4", name: "on" },
];
Default.args = {
  items: items.map((item) => ({ ...item })),
  itemToString: (item) => item?.name,
  label: "Select a business",
  placeholder: "Search",
  btnTextWhenUnselected: "Select a business",
  defaultSelectedItem: items[0],
  dropdownItemProps: {
    isSelected: (selected, current) => selected?.id === current?.id,
    render: (item, selectedItem) => (
      <>
        <div>{item.name}</div>
        {item.id === selectedItem?.id && <CheckIcon />}
      </>
    ),
  },
  hintText: "Select the parent business",
};
