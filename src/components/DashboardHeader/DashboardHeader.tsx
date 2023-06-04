import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {ArrowRightOnRectangleIcon} from 'react-native-heroicons/outline';
import {UserLogo} from '@components/UserLogo/UserLogo';
import {
  ContainerStyle,
  HeaderStyle,
  ArrowRightOnRectangleIconStyle,
  UserSectionStyle,
  UserSectionGrettingsStyle,
  UserSectionNameStyle,
} from './DashboardHeader.style';
import {HighlightCard} from '@components/HighlightCard/HighlightCard';
import tw from '@tailwind';

export function DashboardHeader() {
  return (
    <View style={HeaderStyle}>
      <View style={tw`absolute bg-primary h-[80%] w-full`} />
      <View style={ContainerStyle}>
        <View style={UserSectionStyle}>
          <UserLogo />
          <View>
            <Text style={UserSectionGrettingsStyle}>Olá</Text>
            <Text style={UserSectionNameStyle}>Henriqwe</Text>
          </View>
        </View>
        <ArrowRightOnRectangleIcon
          size={24}
          style={ArrowRightOnRectangleIconStyle}
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw` gap-4 px-6 pb-7`}>
        <HighlightCard
          amount={1740000}
          lastTransaction="Última entrada 1 de abril"
          title="Entradas"
          type="up"
        />
        <HighlightCard
          amount={125900}
          lastTransaction="Última entrada 1 de abril"
          title="Saídas"
          type="down"
        />
        <HighlightCard
          amount={1614100}
          lastTransaction="Última entrada 1 de abril"
          title="Total"
          type="total"
        />
      </ScrollView>
    </View>
  );
}
