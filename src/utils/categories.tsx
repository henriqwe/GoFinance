import tw from '@tailwind';
import React from 'react';
import {
  BookOpenIcon,
  CakeIcon,
  CurrencyDollarIcon,
  HeartIcon,
  ShoppingBagIcon,
  TruckIcon,
} from 'react-native-heroicons/outline';

type TColor = 'text' | 'white';

const IconStyle = (color: TColor = 'text') => tw`text-${color}`;

export const categories = [
  {
    key: 'purchases',
    name: 'Compras',
    icon: (color: TColor = 'text') => (
      <ShoppingBagIcon size={24} style={IconStyle(color)} />
    ),
    color: '#5636D3',
  },
  {
    key: 'food',
    name: 'Alimentação',
    icon: (color: TColor = 'text') => (
      <CakeIcon size={24} style={IconStyle(color)} />
    ),
    color: '#FF872C',
  },
  {
    key: 'salary',
    name: 'Salário',
    icon: (color: TColor = 'text') => (
      <CurrencyDollarIcon size={24} style={IconStyle(color)} />
    ),
    color: '#12A454',
  },
  {
    key: 'car',
    name: 'Carro',
    icon: (color: TColor = 'text') => (
      <TruckIcon size={24} style={IconStyle(color)} />
    ),
    color: '#E83F5B',
  },
  {
    key: 'leisure',
    name: 'Lazer',
    icon: (color: TColor = 'text') => (
      <HeartIcon size={24} style={IconStyle(color)} />
    ),
    color: '#26195C',
  },
  {
    key: 'studies',
    name: 'Estudos',
    icon: (color: TColor = 'text') => (
      <BookOpenIcon size={24} style={IconStyle(color)} />
    ),
    color: '#9C001A',
  },
];
