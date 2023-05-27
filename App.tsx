import {Header} from '@components/Header/Header';
import tw from '@tailwind';
import React from 'react';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';

export function App() {
  return (
    <SafeAreaView style={tw`bg-primary`}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#5636D3'} />
      <View style={tw`bg-background w-full h-full`}>
        <Header />

        <View style={tw`px-6`}>
          <Text style={tw`font-poppins text-lg`}>Listagem</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
