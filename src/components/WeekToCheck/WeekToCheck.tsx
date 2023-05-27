import React from 'react';
import {PressableProps, Text, View} from 'react-native';
import {CheckIcon} from 'react-native-heroicons/outline';
import {
  checkIconContainer,
  checkIconMainContainer,
  checkIconContent,
  line,
  checkIconContainerTwo,
  texRow,
} from './WeekToCheck.style';

interface IWeekToCheck extends PressableProps {
  dayName?: string;
  trainingName: string;
  weekSummary?: any;
}

const WeekToCheck: React.FC<IWeekToCheck> = ({
  trainingName = '',
  weekSummary = [
    {day: 'Segunda', feito: true},
    {day: 'Terca', feito: true},
    {day: 'Quarta', feito: true},
    {day: 'Quinta', feito: true},
    {day: 'Sexta', feito: false},
    {day: 'sabado', feito: true},
    {day: 'domingo', feito: true},
  ],
}) => {
  return weekSummary.map((trainingDay: any, index: number) => {
    return (
      <>
        <View style={checkIconContent}>
          <View style={checkIconMainContainer}>
            <View
              style={
                trainingDay.feito ? checkIconContainer : checkIconContainerTwo
              }
              key={index}>
              <CheckIcon color="white" />
            </View>
            {index !== weekSummary.length - 1 && <View style={line} />}
          </View>
          <Text style={texRow}> {`${trainingDay.day} - ${trainingName}`}</Text>
        </View>
      </>
    );
  });
};
export default WeekToCheck;
