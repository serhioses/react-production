import type { Meta, StoryObj } from '@storybook/react';

import { HomePage } from 'pages/HomePage/ui/HomePage';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/HomePage',
  component: HomePage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof HomePage>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => {
    return <HomePage {...args} />;
  },
};

export const Basic = {
  ...Template,
};
