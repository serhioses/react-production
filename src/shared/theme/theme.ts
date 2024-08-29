import { extendBaseTheme, theme as chakraTheme, withDefaultColorScheme } from '@chakra-ui/react';

const { Alert, Button, Link, Spinner, Modal, Input, FormLabel, FormError, Form } =
  chakraTheme.components;

export const theme = extendBaseTheme(
  {
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
  },
  withDefaultColorScheme({ colorScheme: 'primary' }),
);
