import tw from '@tailwind';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from '@routes/app.routes';

export function App() {
  return (
    <SafeAreaView style={tw`bg-background flex-1`}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#5636D3'} />
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}
