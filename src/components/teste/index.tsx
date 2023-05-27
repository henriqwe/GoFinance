import React from 'react';
import {Text, Pressable, PressableProps, View} from 'react-native';
import tw from '@tailwind';

interface IButton extends PressableProps {
  bgColor: 'emerald-500' | 'orange-300' | 'transparent' | 'sky-500';
  textColor: string;
  borderButton?: boolean;
  borderColor?: string;
  buttonText: string;
  buttonIcon?: boolean;
}
const Button: React.FC<IButton> = ({
  bgColor,
  textColor,
  borderButton = false,
  borderColor = 'transparent',
  buttonText = '',
  buttonIcon = false,
  ...props
}) => {
  return (
    <>
      <Pressable
        {...props}
        style={buttonStyle(bgColor, borderButton, borderColor)}>
        <View style={buttonContent}>
          <Text style={textStyle(textColor)}>{buttonText}</Text>
          {buttonIcon && (
            <ArrowRightIcon style={iconStyle} color={'white'} size={20} />
          )}
        </View>
      </Pressable>
    </>
  );
};
export default Button;
