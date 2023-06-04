import React, {ReactNode} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {
  transactionTypeButtonStyle,
  titleStyle,
  containerStyle,
} from './TransactionTypeButton.style';

interface Props extends TouchableOpacityProps {
  title: string;
  icon: ReactNode;
  type: 'up' | 'down';
  isActive: boolean;
}

export function TransactionTypeButton({
  title,
  icon,
  type,
  isActive,
  ...rest
}: Props) {
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        {...rest}
        activeOpacity={0.7}
        style={transactionTypeButtonStyle(type, isActive)}>
        {icon}
        <Text style={titleStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
