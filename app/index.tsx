import React from 'react';
import { View } from 'react-native';

import ThemeText from '@/components/ThemeText';
import { globalStyles } from '@/styles/global-styles';
import Button from '@/components/Button';
import { Colors } from '@/constants/Colors';

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText>50 x 50</ThemeText>
        <ThemeText variant="h2">25000</ThemeText>
      </View>

      <View style={globalStyles.calculatorRow}>
        <Button
          label="C"
          color={Colors.lightGray}
          blackText
          onPress={() => console.log(1)}
        />
        <Button
          label="+/-"
          color={Colors.lightGray}
          blackText
          onPress={() => console.log(1)}
        />
        <Button
          label="del"
          color={Colors.lightGray}
          blackText
          onPress={() => console.log(1)}
        />
        <Button
          label="÷"
          color={Colors.orange}
          onPress={() => console.log(1)}
        />
      </View>

      <View style={globalStyles.calculatorRow}>
        <Button label="7" onPress={() => console.log(1)} />
        <Button label="8" onPress={() => console.log(1)} />
        <Button label="9" onPress={() => console.log(1)} />
        <Button
          label="x"
          color={Colors.orange}
          onPress={() => console.log(1)}
        />
      </View>

      <View style={globalStyles.calculatorRow}>
        <Button label="4" onPress={() => console.log(1)} />
        <Button label="5" onPress={() => console.log(1)} />
        <Button label="6" onPress={() => console.log(1)} />
        <Button
          label="-"
          color={Colors.orange}
          onPress={() => console.log(1)}
        />
      </View>

      <View style={globalStyles.calculatorRow}>
        <Button label="1" onPress={() => console.log(1)} />
        <Button label="2" onPress={() => console.log(1)} />
        <Button label="3" onPress={() => console.log(1)} />
        <Button
          label="+"
          color={Colors.orange}
          onPress={() => console.log(1)}
        />
      </View>

      <View style={globalStyles.calculatorRow}>
        <Button label="0" doubleSize onPress={() => console.log(1)} />
        <Button label="." onPress={() => console.log(1)} />
        <Button
          label="="
          color={Colors.orange}
          onPress={() => console.log(1)}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
