import React from 'react';
import {SafeAreaView, StatusBar, View, Image} from 'react-native';
import Button from '@components/Button/Button';
import {
  imageStyle,
  safeAreStyle,
  backgroundStyle,
  containerButton,
  secondButton,
  imageContainer,
  homeContainer,
} from './Home.style';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation<PersonalFitNavigation>();
  return (
    <View style={homeContainer}>
      <Image
        style={imageStyle}
        source={require('../../assets/images/background.png')}
      />
      <SafeAreaView style={safeAreStyle}>
        <StatusBar barStyle={'light-content'} />
        <View style={backgroundStyle}>
          <View style={imageContainer}>
            <Image source={require('../../assets/images/icon.png')} />
          </View>
          <View style={containerButton}>
            <Button
              bgColor="emerald-500"
              textColor="white"
              buttonText={'Login'}
              onPress={() => navigation.navigate('Login')}
            />
            <View style={secondButton}>
              <Button
                bgColor="transparent"
                textColor="emerald-500"
                borderButton
                borderColor="emerald-500"
                buttonText={'Cadastre-se'}
                onPress={() => navigation.navigate('BasicInfo')}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default Home;
