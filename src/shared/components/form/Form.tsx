import { ReactNode } from 'react';
import { FormProvider, FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';

type TFormProps<T extends FieldValues> = {
  id: string;
  onSubmit: SubmitHandler<T>;
  methods: UseFormReturn<T>;
  children: ReactNode;
  onBlur?: VoidFunction;
};

export function Form<T extends FieldValues>({
  id,
  onSubmit,
  methods,
  children,
  onBlur,
}: TFormProps<T>) {
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form id={id} onSubmit={handleSubmit(onSubmit)} onBlur={onBlur} noValidate={true}>
        {children}
      </form>
    </FormProvider>
  );
}
