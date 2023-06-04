import {DashboardHeader} from '@components/DashboardHeader/DashboardHeader';
import {TransactionCard} from '@components/TransactionCard/TransactionCard';
import {iconStyle} from '@components/TransactionCard/TransactionCard.style';
import React, {ReactNode} from 'react';
import {View, Text, FlatList} from 'react-native';
import {
  CakeIcon,
  CurrencyDollarIcon,
  HomeIcon,
} from 'react-native-heroicons/outline';
import {
  FlatListStyle,
  dashboardContainerStyle,
  listStyle,
  titleStyle,
} from './dashboard.style';

const transactions: {
  id: string;
  amount: number;
  type: 'decrease' | 'increment';
  title: string;
  date: string;
  category: {
    name: string;
    icon: ReactNode;
  };
}[] = [
  {
    id: '1',
    amount: 1200000,
    type: 'increment',
    title: 'Desenvolvimento de site',
    category: {
      icon: <CurrencyDollarIcon size={20} style={iconStyle('text')} />,
      name: 'Vendas',
    },
    date: new Date().toLocaleDateString('pt-BR'),
  },
  {
    id: '2',
    amount: 5900,
    type: 'decrease',
    title: 'Hamburgueria',
    category: {
      icon: <CakeIcon size={20} style={iconStyle('text')} />,
      name: 'Alimentação',
    },
    date: new Date(new Date().setDate(1)).toLocaleDateString('pt-BR'),
  },
  {
    id: '3',
    amount: 627993,
    type: 'decrease',
    title: 'Aluguel',
    category: {
      icon: <HomeIcon size={20} style={iconStyle('text')} />,
      name: 'Moradia',
    },
    date: new Date(new Date().setDate(12)).toLocaleDateString('pt-BR'),
  },
  {
    id: '4',
    amount: 59004,
    type: 'increment',
    title: 'teste',
    category: {
      icon: <HomeIcon size={20} style={iconStyle('text')} />,
      name: 'Vendas',
    },
    date: new Date(new Date().setDate(12)).toLocaleDateString('pt-BR'),
  },

  {
    id: '5',
    amount: 59005,
    type: 'increment',
    title: 'teste',
    category: {
      icon: <HomeIcon size={20} style={iconStyle('text')} />,
      name: 'Vendas',
    },
    date: new Date(new Date().setDate(12)).toLocaleDateString('pt-BR'),
  },

  {
    id: '6',
    amount: 59006,
    type: 'increment',
    title: 'teste',
    category: {
      icon: <HomeIcon size={20} style={iconStyle('text')} />,
      name: 'Vendas',
    },
    date: new Date(new Date().setDate(12)).toLocaleDateString('pt-BR'),
  },

  {
    id: '7',
    amount: 59007,
    type: 'increment',
    title: 'teste',
    category: {
      icon: <HomeIcon size={20} style={iconStyle('text')} />,
      name: 'Vendas',
    },
    date: new Date(new Date().setDate(12)).toLocaleDateString('pt-BR'),
  },
];

export function Dashboard() {
  return (
    <View style={dashboardContainerStyle}>
      <DashboardHeader />

      <View style={listStyle}>
        <Text style={titleStyle}>Listagem</Text>
        <View>
          <FlatList
            data={transactions}
            contentContainerStyle={FlatListStyle}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TransactionCard
                amount={item.amount}
                amountType={item.type}
                title={item.title}
                category={item.category}
                date={item.date}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}
