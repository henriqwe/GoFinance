import React from 'react';
import {
  BookOpenIcon,
  CakeIcon,
  CurrencyDollarIcon,
  HeartIcon,
  ShoppingBagIcon,
  TruckIcon,
} from 'react-native-heroicons/outline';

export const categories = [
  {
    key: 'purchases',
    name: 'Compras',
    icon: <ShoppingBagIcon size={24} />,
    color: '#5636D3',
  },
  {
    key: 'food',
    name: 'Alimentação',
    icon: <CakeIcon size={24} />,
    color: '#FF872C',
  },
  {
    key: 'salary',
    name: 'Salário',
    icon: <CurrencyDollarIcon size={24} />,
    color: '#12A454',
  },
  {key: 'car', name: 'Carro', icon: <TruckIcon size={24} />, color: '#E83F5B'},
  {
    key: 'leisure',
    name: 'Lazer',
    icon: <HeartIcon size={24} />,
    color: '#26195C',
  },
  {
    key: 'studies',
    name: 'Estudos',
    icon: <BookOpenIcon size={24} />,
    color: '#9C001A',
  },
];
