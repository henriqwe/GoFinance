import React from 'react';
import {TextInput} from 'react-native';
import {inputContainer} from './Input.style';

interface IInput {
  placeholder: string;
  secureTextEntry?: boolean;
}
const Input: React.FC<IInput> = ({placeholder, secureTextEntry = false}) => {
  return (
    <>
      <TextInput
        style={inputContainer}
        placeholder={placeholder}
        placeholderTextColor="#CCCCCC"
        secureTextEntry={secureTextEntry}
      />
    </>
  );
};
export default Input;
