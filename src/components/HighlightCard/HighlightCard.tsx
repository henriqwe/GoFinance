import {View, Text} from 'react-native';
import React from 'react';
import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
  CurrencyDollarIcon,
} from 'react-native-heroicons/outline';
import {BRLMoneyFormat} from '@utils/formaters';
import {
  highlightCardStyle,
  headerStyle,
  titleStyle,
  iconStyle,
  moneyStyle,
  lastTransactionStyle,
} from './HighlightCard.style';

interface Props {
  amount: number;
  type: 'up' | 'down' | 'total';
  lastTransaction: string;
  title: string;
}

export function HighlightCard({amount, type, lastTransaction, title}: Props) {
  const handleType = {
    up: {
      Icon: <ArrowUpCircleIcon size={40} style={iconStyle('success')} />,
      bgColor: 'white',
      textColor: 'title',
      lastTransactionTextColor: 'text',
    },
    down: {
      Icon: <ArrowDownCircleIcon size={40} style={iconStyle('danger')} />,
      bgColor: 'white',
      textColor: 'title',
      lastTransactionTextColor: 'text',
    },
    total: {
      Icon: <CurrencyDollarIcon size={40} style={iconStyle('white')} />,
      bgColor: 'secondary',
      textColor: 'white',
      lastTransactionTextColor: 'white',
    },
  };
  const {Icon, bgColor, textColor, lastTransactionTextColor} = handleType[type];
  return (
    <View style={highlightCardStyle(bgColor)}>
      <View style={headerStyle}>
        <Text style={titleStyle(textColor)}>{title}</Text>
        {Icon}
      </View>

      <View>
        <Text style={moneyStyle(textColor)}>{BRLMoneyFormat(amount)}</Text>
        <Text style={lastTransactionStyle(lastTransactionTextColor)}>
          {lastTransaction}
        </Text>
      </View>
    </View>
  );
}
