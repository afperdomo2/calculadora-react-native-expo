import React from 'react';
import { View } from 'react-native';

import ThemeText from '@/components/ThemeText';
import { globalStyles } from '@/styles/global-styles';

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <ThemeText>50 x 50</ThemeText>
      <ThemeText variant="h2">25000</ThemeText>
    </View>
  );
};

export default CalculatorApp;
