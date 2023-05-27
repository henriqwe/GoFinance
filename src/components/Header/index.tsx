import {View, Text, Image} from 'react-native';
import React from 'react';
import tw from '@tailwind';
import {ArrowRightOnRectangleIcon} from 'react-native-heroicons/outline';
export function Header() {
  return (
    <View style={tw`h-[42%] bg-primary p-6`}>
      <View style={tw`flex-row justify-between items-center`}>
        <View style={tw`flex-row gap-4`}>
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/63527055?v=4',
            }}
            style={tw`w-12 h-12 rounded-md`}
          />
          <View>
            <Text style={tw`font-poppins text-white`}>Olá</Text>
            <Text style={tw`font-poppinsBold text-white`}>Henriqwe</Text>
          </View>
        </View>
        <ArrowRightOnRectangleIcon size={24} style={tw`text-secondary`} />
      </View>
    </View>
  );
}
