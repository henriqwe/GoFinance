import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {buttonStyle, titleStyle} from './Button.style';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...rest}: Props) {
  return (
    <TouchableOpacity {...rest} style={buttonStyle} activeOpacity={0.7}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
