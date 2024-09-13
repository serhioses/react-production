import { Box, Spinner } from '@chakra-ui/react';

export function ModalLoader() {
  return (
    <Box
      sx={{
        p: 8,
        position: 'fixed',
        top: '50%',
        left: '50%',
        zIndex: (theme) => theme.zIndices.overlay - 1,
        transform: 'translate(-50%, -50%)',
        bgColor: 'white',
        borderRadius: 'lg',
        shadow: 'lg',
      }}
    >
      <Spinner size="xl" color="primary.700" />
    </Box>
  );
}
