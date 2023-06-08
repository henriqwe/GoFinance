import React from 'react';
import {View, Pressable} from 'react-native';
import {CheckIcon} from 'react-native-heroicons/solid';
import {checkBoxStyle, iconStyle, wrapperCheckBoxStyle} from './CheckBox.style';

interface ICheckBoxProps {
  label?: JSX.Element;
  onChange: () => void;
  value: boolean;
  disabled?: boolean;
  labelPosition?: 'left' | 'right';
}
export function CheckBox({
  label,
  onChange,
  value,
  disabled = false,
  labelPosition = 'left',
}: ICheckBoxProps) {
  function handleOnChange() {
    if (!disabled) {
      onChange();
    }
  }

  return (
    <Pressable
      onPress={handleOnChange}
      testID="checkBox-container"
      style={wrapperCheckBoxStyle(labelPosition)}>
      {label}
      <View
        style={checkBoxStyle({value, disabled, labelPosition})}
        testID="checkBox">
        {value && (
          <CheckIcon size={17} style={iconStyle} testID="checkBox-icon" />
        )}
      </View>
    </Pressable>
  );
}
