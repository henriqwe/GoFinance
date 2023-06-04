import tw from '@tailwind';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
// import {Dashboard} from '@screens/Dashboard';
import {Register} from '@screens/Register';

export function App() {
  return (
    <SafeAreaView style={tw`bg-background`}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#5636D3'} />
      <Register />
    </SafeAreaView>
  );
}
