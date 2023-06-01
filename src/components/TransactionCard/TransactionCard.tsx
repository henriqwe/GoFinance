import {Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import {
  transactionCardStyle,
  titleStyle,
  amountStyle,
  textStyle,
  footerStyle,
  headerStyle,
  tagStyle,
} from './TransactionCard.style';
import {BRLMoneyFormat} from '@utils/formaters';

interface IProps {
  title: string;
  amount: number;
  amountType: 'increment' | 'decrease';
  category: {
    name: string;
    icon: ReactNode;
  };
  date: string;
}

export function TransactionCard({
  title,
  amount,
  amountType,
  category,
  date,
}: IProps) {
  return (
    <View style={transactionCardStyle}>
      <View style={headerStyle}>
        <Text style={titleStyle}>{title}</Text>
        <Text style={amountStyle({increment: amountType === 'increment'})}>
          {amountType === 'decrease' && '- '}
          {BRLMoneyFormat(amount)}
        </Text>
      </View>
      <View style={footerStyle}>
        <View style={tagStyle}>
          {category.icon}
          <Text style={textStyle}>{category.name}</Text>
        </View>
        <Text style={textStyle}>{date}</Text>
      </View>
    </View>
  );
}
