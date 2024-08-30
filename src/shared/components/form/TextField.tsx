import { Controller, useFormContext } from 'react-hook-form';

import { Input, InputProps, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';

type TTextFieldProps = InputProps & {
  name: string;
  label?: string;
};

export function TextField({ name, label, ...rest }: TTextFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => {
        return (
          <FormControl isInvalid={!!error}>
            {!!label && <FormLabel>{label}</FormLabel>}
            <Input onChange={onChange} value={value} onBlur={onBlur} ref={ref} {...rest} />
            {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
          </FormControl>
        );
      }}
    />
  );
}
