import { useForm } from 'react-hook-form';

import { Form, TextField } from 'shared/components/public-api';

export function LoginForm() {
  const methods = useForm({ defaultValues: { username: '', password: '' } });

  return (
    <Form id="login-form" methods={methods} onSubmit={() => console.log('submit')}>
      <TextField name="username" placeholder="Username" />
      <TextField name="password" placeholder="Password" type="password" />
    </Form>
  );
}
