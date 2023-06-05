import {iconStyle} from '@components/TransactionCard/TransactionCard.style';
import React, {useState} from 'react';
import {
  View,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
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
import {Select} from '@components/Select/Select';
import {CategorySelect} from '@screens/CategorySelect';
import {categories} from '@utils/categories';
import {useForm} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  amount: Yup.number()
    .typeError('Informe um valor númerico')
    .positive('Informe um valor positivo')
    .required('Campo obrigatório'),
});

export function Register() {
  const [transactionType, setTransactionType] = useState<
    'up' | 'down' | undefined
  >();
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState<
    (typeof categories)[0] | undefined
  >();

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  function handleCloseModal() {
    setIsOpen(false);
  }
  function handleOpenModal() {
    setIsOpen(true);
  }
  function onSubmit(formData: any) {
    if (!transactionType) {
      Alert.alert('Seleciona o tipo da transação');
      return;
    }
    if (!category?.key) {
      Alert.alert('Selecione a categoria');
      return;
    }
    const data = {
      name: formData.name,
      amount: formData.amount,
      category: category?.key,
      transactionType,
    };
    console.log({data});
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={dashboardContainerStyle}>
        <Header title="Cadastro" />
        <View style={formStyle}>
          <View style={fieldsStyle}>
            <Input
              control={control}
              name="name"
              placeholder="Nome"
              error={errors?.name}
            />
            <Input
              control={control}
              name="amount"
              placeholder="Preço"
              keyboardType="numeric"
              error={errors?.amount}
            />
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
            <Select
              title={category?.name ?? 'Categoria'}
              onPress={handleOpenModal}
            />
          </View>

          <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
        </View>
        <Modal visible={isOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelect={handleCloseModal}
          />
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}
