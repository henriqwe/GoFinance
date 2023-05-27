import React from 'react';
import {
  BookmarkIcon,
  UserAddIcon,
  CreditCardIcon,
} from 'react-native-heroicons/outline';
import {useRoute} from '@react-navigation/native';
import {Pressable, View} from 'react-native';
import {
  iconGreen,
  containerIcon,
  lineOne,
  boderIconGreen,
  iconGray,
  lineTwo,
} from './Stepper.style';

const Steper = () => {
  const route = useRoute<PersonalFitNavigation>();

  const circleStyle = (circleRoute: string) => {
    const selectedOption: any = options.find(
      option => option.route === route.name,
    );
    const currentOption: any = options.find(
      option => option.route === circleRoute,
    );
    if (circleRoute === route.name) {
      return {
        circle: iconGreen,
        iconColor: 'white',
      };
    }
    if (options.indexOf(selectedOption) > options.indexOf(currentOption)) {
      return {
        circle: boderIconGreen,
        iconColor: '#10B981',
        line: true,
      };
    }
    return {
      circle: iconGray,
      iconColor: '#D1D5DB',
    };
  };
  const options = [
    {
      icon: BookmarkIcon,
      route: 'BasicInfo',
    },
    {
      icon: UserAddIcon,
      route: 'ContactInfo',
    },
    {
      icon: CreditCardIcon,
      route: 'CreditInfo',
    },
  ];

  return (
    <>
      <Pressable style={containerIcon}>
        {options.map((option: any, index: number) => {
          const circleDesign = circleStyle(option.route);
          return (
            <>
              <View key={index} style={circleDesign.circle}>
                {<option.icon size={20} color={circleDesign.iconColor} />}
              </View>
              {index !== 2 && (
                <View style={circleDesign.line ? lineTwo : lineOne} />
              )}
            </>
          );
        })}
      </Pressable>
    </>
  );
};
export default Steper;
