import React, {useState} from 'react';
import {View, Text, Pressable, Image, LayoutAnimation} from 'react-native';
import {
  characteristcBoxStyle,
  characteristcLabelStyle,
  checkBoxWrapperStyle,
  containerStyle,
  headerStyle,
  iconCharacteristcStyle,
  iconStyle,
  imageContainerStyle,
  imageIconStyle,
  imageStyle,
  labelStyle,
  wrapperCharacteristcsStyle,
} from './Expandable.style';

import {
  ChevronDownIcon,
  ChevronUpIcon,
  PlayIcon,
} from 'react-native-heroicons/solid';
import {CheckBox} from '@components/CheckBox/CheckBox';
import type {IExercise, TCharacteristcType} from './Expandable.types';
import {ClockIcon} from 'react-native-heroicons/outline';
import {ArrowsRightLeftIcon} from '@components/Icons/ArrowsRightLeftIcon/ArrowsRightLeftIcon';
import {MergeIcon} from '@components/Icons/MergeIcon/MergeIcon';
import {BoxIcon} from '@components/Icons/BoxIcon/BoxIcon';

interface ExpandableProps {
  item: IExercise;
  onPress: () => void;
  disabled?: boolean;
}

export function Expandable({item, onPress, disabled = false}: ExpandableProps) {
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  function handleOnPress() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  }
  return (
    <View style={containerStyle}>
      <View style={headerStyle}>
        <View style={imageContainerStyle}>
          <Image
            style={imageStyle(isExpanded)}
            source={require('../../assets/images/simple-warm-up-exercises.png')}
          />
          <PlayIcon size={27} style={imageIconStyle} />
        </View>
        <Pressable onPress={handleOnPress} style={checkBoxWrapperStyle}>
          <CheckBox
            value={checkBoxValue}
            labelPosition={'left'}
            label={<Text style={labelStyle(checkBoxValue)}>{item.name}</Text>}
            onChange={() => {
              onPress();
              if (!disabled) {
                setCheckBoxValue(!checkBoxValue);
              }
            }}
          />

          {isExpanded ? (
            <ChevronUpIcon size={24} style={iconStyle} />
          ) : (
            <ChevronDownIcon size={24} style={iconStyle} />
          )}
        </Pressable>
      </View>
      <View style={wrapperCharacteristcsStyle(isExpanded)}>
        {isExpanded &&
          item.characteristcs.map(({type, label}) => (
            <View style={characteristcBoxStyle}>
              <CharacteristcIcon type={type} />
              <Text style={characteristcLabelStyle}>{label}</Text>
            </View>
          ))}
      </View>
    </View>
  );
}

function CharacteristcIcon({type}: {type: TCharacteristcType}) {
  switch (type) {
    case 'repetitions':
      return <ArrowsRightLeftIcon />;
    case 'restTime':
      return <ClockIcon size={16} style={iconCharacteristcStyle} />;
    case 'series':
      return <MergeIcon />;
    case 'weight':
      return <BoxIcon />;
  }
}
