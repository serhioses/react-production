import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { ChakraBaseProvider, useColorMode } from '@chakra-ui/react';
import type { Preview } from '@storybook/react';

import i18n from 'shared/configs/i18n/i18n';
import { theme } from 'shared/theme/theme';

interface ColorModeProps {
  colorMode: 'light' | 'dark';
  children: JSX.Element;
}

function ColorMode(props: ColorModeProps) {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode(props.colorMode);
  }, [props.colorMode, setColorMode]);

  return props.children;
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      return (
        <ChakraBaseProvider theme={theme}>
          <ColorMode colorMode={context.globals.colorMode}>
            <MemoryRouter>
              <Suspense fallback={<p>Loading translations...</p>}>
                <I18nextProvider i18n={i18n}>
                  <Story />
                </I18nextProvider>
              </Suspense>
            </MemoryRouter>
          </ColorMode>
        </ChakraBaseProvider>
      );
    },
  ],
};

export const globalTypes = {
  colorMode: {
    name: 'Color Mode',
    defaultValue: 'light',
    toolbar: {
      items: [
        { title: 'Light', value: 'light' },
        { title: 'Dark', value: 'dark' },
      ],
      dynamicTitle: true,
    },
  },
};

export default preview;
