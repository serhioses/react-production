import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Alert, AlertDescription, Button } from '@chakra-ui/react';

import { Modal } from 'shared/components/modal/Modal';
import { TModalProps } from 'shared/types/modal';
import { getErrorMessage } from 'shared/utils/getErrorMessage';

import { selectLogin } from 'features/AuthByUsername/model/selectors/select-login/select-login';
import { loginReducer } from 'features/AuthByUsername/model/slice/login-slice';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';

import { useAppSelector, useAppStore } from 'app/providers/StoreProvider/config/hooks';

export function LoginModal({ isOpen, onClose }: TModalProps) {
  const store = useAppStore();

  const { isLoading, error } = useAppSelector(selectLogin) || {};
  const { t } = useTranslation();
  const { t: translateAuth } = useTranslation('auth');

  useEffect(() => {
    store.injectReducers([{ key: 'login', asyncReducer: loginReducer }]);
  }, [store]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      headerContent={translateAuth('logIn')}
      footerContent={
        <Button type="submit" form="login-form" isDisabled={isLoading}>
          {translateAuth('logIn')}
        </Button>
      }
    >
      <LoginForm onModalClose={onClose} />
      {error && (
        <Alert status="error" mt={4}>
          <AlertDescription>{getErrorMessage(error, t)}</AlertDescription>
        </Alert>
      )}
    </Modal>
  );
}

export { LoginModal as default };
