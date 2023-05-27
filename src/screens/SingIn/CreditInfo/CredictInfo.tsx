import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
import Steper from '@components/Stepper/Stepper';
import {
  creditInfoContainer,
  containerCreditText,
  inputGroupCredit,
  styleButtonCredit,
  creditInfoTextFirst,
  creditInfoTextSecond,
  steperContainerCredit,
} from './CreditInfo.style';

const CreditInfo = () => {
  const navigation = useNavigation<PersonalFitNavigation>();
  return (
    <>
      <View style={creditInfoContainer}>
        <SafeAreaView>
          <StatusBar barStyle={'dark-content'} />
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps="handled">
            <Pressable onPress={() => navigation.navigate('ContactInfo')}>
              <ChevronLeftIcon color="black" size={30} />
            </Pressable>
            <View style={steperContainerCredit}>
              <Steper />
            </View>
            <View style={containerCreditText}>
              <Text style={creditInfoTextFirst}>Cadastro</Text>
              <Text style={creditInfoTextSecond}>Informações de pagamento</Text>
            </View>
            <Input placeholder="Nome" secureTextEntry={false} />
            <View style={inputGroupCredit}>
              <Input placeholder="Número" secureTextEntry={false} />
            </View>
            <View style={inputGroupCredit}>
              <Input placeholder="Válidade" secureTextEntry={false} />
            </View>
            <View style={styleButtonCredit}>
              <Button
                bgColor="emerald-500"
                textColor="white"
                buttonText={'Próximo'}
                buttonIcon={true}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

export default CreditInfo;
