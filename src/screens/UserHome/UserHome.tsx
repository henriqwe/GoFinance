import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import {
  userHomeInfoText,
  trainingContent,
  moreTraining,
  moreTrainingContainer,
  weekToCheckComponent,
} from './UserHome.style';
import Training from '@components/Training/Training';
import WeekToCheck from '@components/WeekToCheck/WeekToCheck';

const UserHome = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <StatusBar barStyle={'dark-content'} />
          <View>
            <View style={trainingContent}>
              <Training
                trainingTitle={'Hipertrofia muscular 2'}
                studentName={'Leonardo Nascimento'}
                title={'Sessão de Treino ativa'}
                inicialDate={'25/10/2022'}
                finalDate={'25/11/2022'}
              />
            </View>
            <Pressable style={moreTrainingContainer}>
              <Text style={moreTraining}>Ver mais treinos</Text>
            </Pressable>
            <Text style={userHomeInfoText}>Resumo Semanal</Text>
            <View style={weekToCheckComponent}>
              <WeekToCheck dayName={'Segunda'} trainingName={' treino ys'} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default UserHome;
