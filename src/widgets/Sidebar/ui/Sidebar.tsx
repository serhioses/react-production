import { useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, IconButton } from '@chakra-ui/react';

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  function toggleCollapsed(): void {
    setCollapsed((c) => !c);
  }

  return (
    <Box
      sx={{
        width: collapsed ? '80px' : '300px',
        height: 'calc(100dvh - 50px)',
        position: 'relative',
        transition: '0.1s ease-in',
        boxShadow: 'xl',
      }}
      data-testid="sidebar"
    >
      <IconButton
        aria-label="toggle sidebar"
        onClick={toggleCollapsed}
        data-testid="sidebar-toggle"
        sx={{
          position: 'absolute',
          insetBlockEnd: '24px',
          insetInlineEnd: 0,
          transform: 'translateX(50%)',
          zIndex: 1,
        }}
        icon={collapsed ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      />
    </Box>
  );
}
