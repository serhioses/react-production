import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  IconButton,
  Flex,
  Link,
  SystemStyleObject,
  useColorMode,
  Button,
  HStack,
  StackDivider,
} from '@chakra-ui/react';

import { ERoutes } from 'shared/enums/routes';

type TNavbarProps = {
  sx?: SystemStyleObject;
};

export function Navbar({ sx }: TNavbarProps) {
  const { toggleColorMode, colorMode } = useColorMode();
  const { t, i18n } = useTranslation();

  function changeLang(lng: string): void {
    if (lng !== i18n.language) {
      i18n.changeLanguage(lng);
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: 50,
        padding: 5,
        backgroundColor: colorMode === 'light' ? 'gray.500' : 'white',
        color: colorMode === 'light' ? 'white' : 'black',
        boxShadow: 'md',
        ...sx,
      }}
      data-testid="navbar"
    >
      <Flex sx={{ marginInline: 'auto 24px', gap: 4 }}>
        <Link as={RouterLink} to={ERoutes.Main}>
          {t('home')}
        </Link>
        <Link as={RouterLink} to={ERoutes.About}>
          {t('about')}
        </Link>
      </Flex>
      <IconButton
        variant="ghost"
        colorScheme={colorMode === 'light' ? 'gray' : ''}
        onClick={toggleColorMode}
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        aria-label="Toggle theme"
      />
      <HStack divider={<StackDivider />}>
        <Button
          size="sm"
          variant="link"
          color="inherit"
          sx={{ opacity: i18n.language !== 'ru' && i18n.language !== 'ru-RU' ? 1 : 0.75 }}
          onClick={() => changeLang('en')}
        >
          EN
        </Button>
        <Button
          size="sm"
          variant="link"
          color="inherit"
          sx={{ opacity: i18n.language === 'ru' || i18n.language === 'ru-RU' ? 1 : 0.75 }}
          onClick={() => changeLang('ru')}
        >
          RU
        </Button>
      </HStack>
    </Box>
  );
}
