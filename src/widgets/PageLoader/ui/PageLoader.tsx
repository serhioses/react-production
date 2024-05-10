import { Center, Spinner, SpinnerProps } from '@chakra-ui/react';

export function PageLoader(props: SpinnerProps) {
  return (
    <Center sx={{ position: 'absolute', inset: 0 }}>
      <Spinner size="xl" {...props} />
    </Center>
  );
}
