import type { Meta, StoryObj } from "@storybook/react";
import ToolTip from "../components/tooltip/ToolTip";
import { Direction } from "../constant/enum";

const meta = {
  title: "ODD/ToolTip",
  component: ToolTip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {},
} satisfies Meta<typeof ToolTip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...meta.args,
    isEnabled: true,
    direction: Direction.BOTTOM_LEFT,
  },
};

export const Secondary: Story = {
  args: {
    ...meta.args,
    isEnabled: true,
    direction: Direction.BOTTOM_LEFT,
  },
};

export const Large: Story = {
  args: {
    isEnabled: true,
    direction: Direction.BOTTOM_LEFT,
  },
};

export const Small: Story = {
  args: {
    isEnabled: true,
    direction: Direction.BOTTOM_LEFT,
  },
};
