import { PropsWithChildren, ReactNode } from 'react';

import {
  Modal as ChakraModal,
  CloseButtonProps,
  ModalBody,
  ModalBodyProps,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalFooterProps,
  ModalHeader,
  ModalHeaderProps,
  ModalOverlay,
  ModalOverlayProps,
} from '@chakra-ui/react';

import { TModalProps } from 'shared/types/modal';

type TModalPropsLocal = TModalProps &
  PropsWithChildren & {
    showHeader?: boolean;
    showCloseButton?: boolean;
    showFooter?: boolean;
    headerContent?: ReactNode;
    footerContent?: ReactNode;
    overlayProps?: ModalOverlayProps;
    headerProps?: ModalHeaderProps;
    closeButtonProps?: CloseButtonProps;
    bodyProps?: ModalBodyProps;
    footerProps?: ModalFooterProps;
  };

export function Modal(props: TModalPropsLocal) {
  const {
    children,
    showHeader = true,
    showCloseButton = true,
    showFooter = true,
    headerContent,
    footerContent,
    overlayProps,
    headerProps,
    closeButtonProps,
    bodyProps,
    footerProps,
    isOpen,
    closeOnOverlayClick,
    onClose,
    ...rest
  } = props;

  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={closeOnOverlayClick}
      {...rest}
    >
      <ModalOverlay {...overlayProps} />
      <ModalContent>
        {showHeader && <ModalHeader {...headerProps}>{headerContent}</ModalHeader>}
        {showCloseButton && <ModalCloseButton {...closeButtonProps} />}
        <ModalBody {...bodyProps}>{children}</ModalBody>

        {showFooter && <ModalFooter {...footerProps}>{footerContent}</ModalFooter>}
      </ModalContent>
    </ChakraModal>
  );
}
