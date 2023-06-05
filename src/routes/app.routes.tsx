import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dashboard} from '@screens/Dashboard';
import {Register} from '@screens/Register';
import {tailwindFullConfig} from '@utils/tailwindFullConfig';
import tw from '@tailwind';
import {
  ChartPieIcon,
  CurrencyDollarIcon,
  ListBulletIcon,
} from 'react-native-heroicons/outline';

const TabNavigator = createBottomTabNavigator();

export function AppRoutes() {
  const tabBarActiveTintColor = tailwindFullConfig.theme?.colors?.secondary as {
    DEFAULT: string;
  };

  return (
    <TabNavigator.Navigator
      initialRouteName="Listagem"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: tabBarActiveTintColor?.DEFAULT,
        tabBarInactiveTintColor: tailwindFullConfig.theme?.colors
          ?.text as string,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: tw`h-20`,
      }}>
      <TabNavigator.Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: ({color, size}) => (
            <ListBulletIcon size={size} color={color} />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({color, size}) => (
            <CurrencyDollarIcon size={size} color={color} />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Resumo"
        component={Register}
        options={{
          tabBarIcon: ({color, size}) => (
            <ChartPieIcon size={size} color={color} />
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
}
