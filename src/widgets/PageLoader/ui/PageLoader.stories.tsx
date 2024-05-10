import type { Meta, StoryObj } from '@storybook/react';

import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Widgets/PageLoader',
  component: PageLoader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: { control: 'text' },
    emptyColor: { control: 'text' },
    label: { control: 'text' },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: 'select',
    },
    speed: { control: 'text' },
    thickness: { control: 'text' },
    variant: { control: 'text' },
  },
  args: {
    size: 'sm',
  },
} satisfies Meta<typeof PageLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => {
    return <PageLoader {...args} />;
  },
};

export const Basic = {
  ...Template,
};
