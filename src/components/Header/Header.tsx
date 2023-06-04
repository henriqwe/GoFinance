import {View, Text} from 'react-native';
import React from 'react';
import {HeaderStyle, titleStyle} from './Header.style';
interface Props {
  title: string;
}
export function Header({title}: Props) {
  return (
    <View style={HeaderStyle}>
      <Text style={titleStyle}>{title}</Text>
    </View>
  );
}
