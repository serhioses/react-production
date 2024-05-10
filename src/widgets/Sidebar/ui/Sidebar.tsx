import { useState } from 'react';

import { Box, Button } from '@chakra-ui/react';

import GradeIcon from 'shared/assets/icons/grade.svg';

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
        background: 'black',
        position: 'relative',
        transition: '0.1s ease-in',
      }}
      data-testid="sidebar"
    >
      <Button onClick={toggleCollapsed} data-testid="sidebar-toggle">
        <GradeIcon />
      </Button>
    </Box>
  );
}
