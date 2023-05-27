import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  ScrollView,
  Pressable,
} from 'react-native';
import {
  loginText,
  textContainer,
  container,
  formContainer,
  secondInput,
  screenContainer,
} from './Login.style';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation<PersonalFitNavigation>();
  return (
    <>
      <SafeAreaView style={screenContainer}>
        <StatusBar barStyle={'dark-content'} />
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View style={container}>
            <Pressable onPress={() => navigation.navigate('Home')}>
              <ChevronLeftIcon color="black" size={30} />
            </Pressable>
            <View style={textContainer}>
              <Text style={loginText}>Log In</Text>
            </View>
            <View style={formContainer}>
              <Input placeholder="Email" />
              <View style={secondInput}>
                <Input placeholder="Senha" secureTextEntry={true} />
              </View>
            </View>
            <Button
              bgColor="emerald-500"
              textColor="white"
              buttonText={'Login'}
              onPress={() => navigation.navigate('UserHome')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default Login;
