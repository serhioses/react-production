import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

import { LoginForm } from '../LoginForm/LoginForm';

type TLoginModalProps = {
  isOpen: boolean;
  onClose: VoidFunction;
};

export function LoginModal({ isOpen, onClose }: TLoginModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <LoginForm />
        </ModalBody>

        <ModalFooter>
          <Button type="submit" form="login-form">
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
