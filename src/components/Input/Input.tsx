import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';
import {InputStyle, errorTextStyle, containerStyle} from './Input.style';
import {
  Control,
  Controller,
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
} from 'react-hook-form';
interface Props extends TextInputProps {
  name: string;
  defaultValue?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  control: Control<FieldValues>;
}
export function Input({name, defaultValue, control, error, ...rest}: Props) {
  return (
    <View style={containerStyle}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({field: {onChange, value}}) => (
          <TextInput
            {...rest}
            autoCorrect={false}
            onChangeText={onChange}
            value={value}
            style={InputStyle}
          />
        )}
      />
      {error && <Text style={errorTextStyle}>{error?.message as string}</Text>}
    </View>
  );
}
