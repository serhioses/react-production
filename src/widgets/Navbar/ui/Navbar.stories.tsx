import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from 'widgets/Navbar/ui/Navbar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const meta = {
  title: 'Widgets/Navbar',
  component: Navbar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => {
    return <Navbar {...args} />;
  },
};

export const Basic = {
  ...Template,
};
