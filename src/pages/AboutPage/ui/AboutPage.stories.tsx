import type { Meta, StoryObj } from '@storybook/react';

import { AboutPage } from 'pages/AboutPage/ui/AboutPage';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/AboutPage',
  component: AboutPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AboutPage>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => {
    return <AboutPage {...args} />;
  },
};

export const Basic = {
  ...Template,
};
