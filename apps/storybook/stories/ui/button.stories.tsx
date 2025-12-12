import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@workspace/ui/components/button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "secondary", "outline", "ghost", "link"],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "icon"],
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "Label",
    variant: "default",
    size: "default",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = {
  args: { variant: "secondary", children: "Label" },
};
export const Outline: Story = {
  args: { variant: "outline", children: "Label" },
};
export const Ghost: Story = {
  args: { variant: "ghost", children: "Ghost" },
};
export const Link: Story = {
  args: { variant: "link", children: "Link" },
};
export const Small: Story = {
  args: { size: "sm", children: "Small" },
};
export const Icon: Story = {
  args: { size: "icon", children: "🔔" },
};
export const Disabled: Story = {
  args: { disabled: true, children: "Disabled" },
};
