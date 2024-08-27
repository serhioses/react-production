import { Controller, useFormContext } from 'react-hook-form';

import { Input, InputProps } from '@chakra-ui/react';

type TTextFieldProps = InputProps & {
  name: string;
};

export function TextField({ name, ...rest }: TTextFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => {
        return (
          <Input
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            ref={ref}
            isInvalid={!!error}
            {...rest}
          />
        );
      }}
    />
  );
}
