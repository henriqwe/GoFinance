import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {InputStyle} from './Input.style';

interface Props extends TextInputProps {}
export function Input({...rest}: Props) {
  return <TextInput {...rest} style={InputStyle} />;
}
