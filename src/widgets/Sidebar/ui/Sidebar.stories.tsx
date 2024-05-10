import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const meta = {
  title: 'Widgets/Sidebar',
  component: Sidebar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => {
    return <Sidebar {...args} />;
  },
};

export const Basic = {
  ...Template,
};
