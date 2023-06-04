import React, {useState} from 'react';
import {View} from 'react-native';
import {
  dashboardContainerStyle,
  fieldsStyle,
  formStyle,
  transactionTypeButtonStyle,
} from './register.style';
import {Header} from '@components/Header/Header';
import {Input} from '@components/Input/Input';
import {Button} from '@components/Button/Button';
import {TransactionTypeButton} from '@components/TransactionTypeButton/TransactionTypeButton';
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from 'react-native-heroicons/outline';
import {iconStyle} from '@components/TransactionCard/TransactionCard.style';
import {Select} from '@components/Select/Select';

export function Register() {
  const [transactionType, setTransactionType] = useState<
    'up' | 'down' | undefined
  >();
  return (
    <View style={dashboardContainerStyle}>
      <Header title="Cadastro" />
      <View style={formStyle}>
        <View style={fieldsStyle}>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <View style={transactionTypeButtonStyle}>
            <TransactionTypeButton
              icon={
                <ArrowUpCircleIcon size={24} style={iconStyle('success')} />
              }
              title="Entrada"
              type="up"
              isActive={transactionType === 'up'}
              onPress={() => setTransactionType('up')}
            />

            <TransactionTypeButton
              icon={
                <ArrowDownCircleIcon size={24} style={iconStyle('danger')} />
              }
              title="Saída"
              type="down"
              isActive={transactionType === 'down'}
              onPress={() => setTransactionType('down')}
            />
          </View>
          <Select title="Categoria" />
        </View>

        <Button title="Enviar" />
      </View>
    </View>
  );
}
