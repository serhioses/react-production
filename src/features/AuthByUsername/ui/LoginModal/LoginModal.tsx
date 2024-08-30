import { useTranslation } from 'react-i18next';

import {
  Alert,
  AlertDescription,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

import { getErrorMessage } from 'shared/utils/getErrorMessage';

import { selectLogin } from 'features/AuthByUsername/model/selectors/select-login/select-login';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';

import { useAppSelector } from 'app/providers/StoreProvider/config/hooks';

type TLoginModalProps = {
  isOpen: boolean;
  onClose: VoidFunction;
};

export function LoginModal({ isOpen, onClose }: TLoginModalProps) {
  const { isLoading, error } = useAppSelector(selectLogin);
  const { t } = useTranslation();
  const { t: translateAuth } = useTranslation('auth');

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{translateAuth('logIn')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <LoginForm onModalClose={onClose} />
          {error && (
            <Alert status="error" mt={4}>
              <AlertDescription>{getErrorMessage(error, t)}</AlertDescription>
            </Alert>
          )}
        </ModalBody>

        <ModalFooter>
          <Button type="submit" form="login-form" isDisabled={isLoading}>
            {translateAuth('logIn')}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export { LoginModal as default };
