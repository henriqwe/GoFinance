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
import {
  basicInfoTextFirst,
  basicInfoTextSecond,
  basicInfoContainer,
  containerBaisicInfoText,
  inputGroup,
  styleButton,
  steperContainer,
} from './BasicInfo.style';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
import Steper from '@components/Stepper/Stepper';

const BasicInfo = () => {
  const navigation = useNavigation<PersonalFitNavigation>();
  const route = useRoute<PersonalFitNavigation>();
  console.log(route);
  return (
    <>
      <View style={basicInfoContainer}>
        <SafeAreaView>
          <StatusBar barStyle={'dark-content'} />
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps="handled">
            <Pressable onPress={() => navigation.navigate('Home')}>
              <ChevronLeftIcon color="black" size={30} />
            </Pressable>
            <View style={steperContainer}>
              <Steper />
            </View>
            <View style={containerBaisicInfoText}>
              <Text style={basicInfoTextFirst}>Cadastro</Text>
              <Text style={basicInfoTextSecond}>Informações básicas</Text>
            </View>
            <Input placeholder="Nome" secureTextEntry={false} />
            <View style={inputGroup}>
              <Input placeholder="Sobrenome" secureTextEntry={false} />
            </View>
            <View style={inputGroup}>
              <Input placeholder="Email" secureTextEntry={false} />
            </View>
            <View style={inputGroup}>
              <Input placeholder="Senha" secureTextEntry={true} />
            </View>
            <View style={styleButton}>
              <Button
                bgColor="emerald-500"
                textColor="white"
                buttonText={'Próximo'}
                buttonIcon={true}
                onPress={() => navigation.navigate('ContactInfo')}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

export default BasicInfo;
