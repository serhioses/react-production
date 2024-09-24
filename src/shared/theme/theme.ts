import {
  extendBaseTheme,
  theme as chakraTheme,
  withDefaultColorScheme,
  baseTheme,
  useTheme,
} from '@chakra-ui/react';

const { Alert, Button, Link, Spinner, Modal, Input, FormLabel, FormError, Form } =
  chakraTheme.components;

type BaseTheme = typeof baseTheme;

type Colors = BaseTheme['colors'] & {
  primary: BaseTheme['colors']['blue'];
};

type ThemeConfig = Omit<BaseTheme, 'colors'> & {
  colors: Partial<Colors>;
};

const themeConfig: Partial<ThemeConfig> = {
  colors: {
    primary: chakraTheme.colors.blue,
  },
  styles: {
    global: {
      html: {
        height: '100%',
      },
      body: {
        height: '100%',
        fontFamily: 'Arial, sans-serif',
      },
      '#root': {
        height: '100%',
      },
    },
  },
  components: {
    Alert,
    Button,
    Link,
    Spinner,
    Modal,
    Input,
    FormError,
    FormLabel,
    Form,
  },
};

export const theme = extendBaseTheme(
  themeConfig,
  withDefaultColorScheme({ colorScheme: 'primary' }),
);

export const useAppTheme = useTheme<Required<typeof themeConfig>>;
