import { Suspense, useEffect } from 'react';
import { I18nContext } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { ChakraBaseProvider, ColorModeContext, useColorMode } from '@chakra-ui/react';
import type { Preview } from '@storybook/react';
import { Callback, TFunction } from 'i18next';

import i18n from 'shared/configs/i18n/i18n';
import { theme } from 'shared/theme/theme';

const originalChangeLanguage = i18n.changeLanguage;

// Mock the changeLanguage method
const mockChangeLanguage = (
  _?: string,
  callback?: Callback,
): Promise<TFunction<'translation', undefined>> => {
  return originalChangeLanguage.call(i18n, 'en', callback);
};

// Override i18n's changeLanguage method with the mocked function
i18n.changeLanguage = mockChangeLanguage;

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
      context;

      return (
        <ChakraBaseProvider theme={theme}>
          <ColorMode colorMode={context.globals.colorMode}>
            <ColorModeContext.Provider
              value={{
                colorMode: context.globals.colorMode,
                toggleColorMode: () => null,
                setColorMode: (value) => value,
              }}
            >
              <MemoryRouter>
                <Suspense fallback={<p>Loading translations...</p>}>
                  <I18nContext.Provider
                    value={{
                      i18n,
                    }}
                  >
                    <Story />
                  </I18nContext.Provider>
                </Suspense>
              </MemoryRouter>
            </ColorModeContext.Provider>
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
