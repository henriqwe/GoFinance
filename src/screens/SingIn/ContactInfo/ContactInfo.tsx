import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
import Steper from '@components/Stepper/Stepper';
import {
  contactInfoContainer,
  containerContactText,
  contactInfoTextFirst,
  contactInfoTextSecond,
  inputGroupContact,
  styleButtonContact,
  steperContainerContact,
} from './ContactInfo.style';

const ContactInfo = () => {
  const navigation = useNavigation<PersonalFitNavigation>();
  const route = useRoute<PersonalFitNavigation>();
  console.log(route);
  return (
    <>
      <View style={contactInfoContainer}>
        <SafeAreaView>
          <StatusBar barStyle={'dark-content'} />
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps="handled">
            <Pressable onPress={() => navigation.navigate('BasicInfo')}>
              <ChevronLeftIcon color="black" size={30} />
            </Pressable>
            <View style={steperContainerContact}>
              <Steper />
            </View>
            <View style={containerContactText}>
              <Text style={contactInfoTextFirst}>Cadastro</Text>
              <Text style={contactInfoTextSecond}>Informações de contato</Text>
            </View>
            <Input placeholder="Telefone" secureTextEntry={false} />
            <View style={inputGroupContact}>
              <Input placeholder="WhatsApp" secureTextEntry={false} />
            </View>
            <View style={inputGroupContact}>
              <Input placeholder="Instagram" secureTextEntry={false} />
            </View>
            <View style={styleButtonContact}>
              <Button
                bgColor="emerald-500"
                textColor="white"
                buttonText={'Próximo'}
                buttonIcon={true}
                onPress={() => navigation.navigate('CreditInfo')}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

export default ContactInfo;
