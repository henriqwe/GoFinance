import React from 'react';
import {View, Text, PressableProps, Pressable} from 'react-native';
import {
  mainContainer,
  continueContent,
  textTraining,
  firstTextTraining,
  continueText,
  dateContainer,
  dateText,
} from './Training.style';
import {ArrowRightIcon, CalendarIcon} from 'react-native-heroicons/outline';

interface ITraining extends PressableProps {
  title: string;
  trainingTitle: string;
  studentName: string;
  inicialDate: string;
  finalDate: string;
}

const Training: React.FC<ITraining> = ({
  title = '',
  trainingTitle = '',
  studentName = '',
  inicialDate = '',
  finalDate = '',
}) => {
  return (
    <>
      <View style={mainContainer}>
        <Text style={firstTextTraining}>{title}</Text>
        <Text style={textTraining}>{trainingTitle}</Text>
        <Text style={textTraining}>{studentName}</Text>
        <View style={dateContainer}>
          <CalendarIcon color={'white'} />
          <Text style={dateText}>{`${inicialDate} - ${finalDate}`}</Text>
        </View>
        <Pressable style={continueContent}>
          <Text style={continueText}>Continuar</Text>
          <ArrowRightIcon color={'white'} />
        </Pressable>
      </View>
    </>
  );
};
export default Training;
