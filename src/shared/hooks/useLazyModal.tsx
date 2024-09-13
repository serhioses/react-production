import { useCallback, useState, useTransition, Suspense, FunctionComponent } from 'react';

import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';

import { ModalLoader } from 'shared/components/modal/ModalLoader';
import { TModalProps } from 'shared/types/modal';

type TUseLazyModalResult<T> = Pick<UseDisclosureReturn, 'isOpen' | 'onClose'> & {
  ModalComponent: FunctionComponent<T> | (() => null);
  onOpen: VoidFunction;
};

export function useLazyModal<T extends TModalProps>(
  Component: FunctionComponent<T>,
): TUseLazyModalResult<T> {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [shouldLoad, setShouldLoad] = useState(false);
  const [, startTransition] = useTransition();

  const ModalComponent = shouldLoad
    ? (props: T) => (
        <Suspense fallback={<ModalLoader />}>
          <Component {...props} />
        </Suspense>
      )
    : () => null;

  const handleOpen = useCallback(() => {
    if (!shouldLoad) {
      startTransition(() => setShouldLoad(true));
    }

    onOpen();
  }, [shouldLoad, onOpen]);

  return { ModalComponent, isOpen, onOpen: handleOpen, onClose };
}
