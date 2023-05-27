import {Image} from 'react-native';
import React from 'react';
import {UserLogoStyle} from './UserLogo.style';

export function UserLogo() {
  return (
    <Image
      source={{
        uri: 'https://avatars.githubusercontent.com/u/63527055?v=4',
      }}
      style={UserLogoStyle}
    />
  );
}
