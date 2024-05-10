import type { Meta, StoryObj } from '@storybook/react';

import { ErrorFallback } from 'widgets/ErrorFallback/ui/ErrorFallback';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Widgets/ErrorFallback',
  component: ErrorFallback,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorFallback>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => {
    return <ErrorFallback {...args} />;
  },
  args: {
    error: { message: 'msg' },
    resetErrorBoundary: () => null,
  },
};

export const Basic = {
  ...Template,
};
