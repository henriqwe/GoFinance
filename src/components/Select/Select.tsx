import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {iconStyle, selectStyle, titleStyle} from './Select.style';
import {ChevronDownIcon} from 'react-native-heroicons/outline';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Select({title, ...rest}: Props) {
  return (
    <TouchableOpacity {...rest} style={selectStyle} activeOpacity={0.7}>
      <Text style={titleStyle}>{title}</Text>
      <ChevronDownIcon size={24} style={iconStyle} />
    </TouchableOpacity>
  );
}
