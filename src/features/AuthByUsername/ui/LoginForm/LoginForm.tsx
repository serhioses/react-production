import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { TFunction } from 'i18next';
import { InferType, object, string } from 'yup';

import { Form, TextField } from 'shared/components/public-api';

import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/login-by-username';

import { useAppDispatch } from 'app/providers/StoreProvider/config/hooks';

function createSchema(t: TFunction) {
  return object({
    username: string()
      .required(t('validation.required', { fieldlName: t('fieldNames.username') }))
      .max(
        32,
        t('validation.maxLength', { fieldlName: t('fieldNames.username'), charsNumber: 32 }),
      ),
    password: string().required(t('validation.required', { fieldlName: t('fieldNames.password') })),
  });
}

type TFormData = InferType<ReturnType<typeof createSchema>>;

type TLoginFormProps = {
  onModalClose?: VoidFunction;
};

export function LoginForm({ onModalClose }: TLoginFormProps) {
  const { t } = useTranslation('auth');
  const { t: translateErrors } = useTranslation();

  const schema = createSchema(translateErrors);

  const methods = useForm<TFormData>({
    defaultValues: { username: '', password: '' },
    resolver: yupResolver(schema),
  });
  const dispatch = useAppDispatch();

  function handleSubmit(values: TFormData): void {
    dispatch(loginByUsername({ ...values, onSuccess: onModalClose }));
  }

  return (
    <Form id="login-form" methods={methods} onSubmit={handleSubmit}>
      <Stack gap={4}>
        <TextField name="username" placeholder={t('username')} />
        <TextField name="password" placeholder={t('password')} type="password" />
      </Stack>
    </Form>
  );
}

export { LoginForm as default };
