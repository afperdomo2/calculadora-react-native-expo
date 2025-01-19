import { View } from 'react-native';

import Button from '@/components/Button';
import ThemeText from '@/components/ThemeText';
import { Colors } from '@/constants/Colors';
import { useCalculator } from '@/hooks/useCalculator';
import { globalStyles } from '@/styles/global-styles';

const CalculatorApp = () => {
  const { formula, clean, tootleSign, removeLast, buildNumber } =
    useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText>{formula}</ThemeText>
        <ThemeText variant="h2">asd</ThemeText>
      </View>

      <View style={globalStyles.calculatorRow}>
        <Button label="C" color={Colors.lightGray} blackText onPress={clean} />
        <Button
          label="+/-"
          color={Colors.lightGray}
          blackText
          onPress={tootleSign}
        />
        <Button
          label="del"
          color={Colors.lightGray}
          blackText
          onPress={removeLast}
        />
        <Button
          label="÷"
          color={Colors.orange}
          onPress={() => console.log(1)}
        />
      </View>

      <View style={globalStyles.calculatorRow}>
        <Button label="7" onPress={() => buildNumber('7')} />
        <Button label="8" onPress={() => buildNumber('8')} />
        <Button label="9" onPress={() => buildNumber('9')} />
        <Button
          label="x"
          color={Colors.orange}
          onPress={() => console.log(1)}
        />
      </View>

      <View style={globalStyles.calculatorRow}>
        <Button label="4" onPress={() => buildNumber('4')} />
        <Button label="5" onPress={() => buildNumber('5')} />
        <Button label="6" onPress={() => buildNumber('6')} />
        <Button
          label="-"
          color={Colors.orange}
          onPress={() => console.log(1)}
        />
      </View>

      <View style={globalStyles.calculatorRow}>
        <Button label="1" onPress={() => buildNumber('1')} />
        <Button label="2" onPress={() => buildNumber('2')} />
        <Button label="3" onPress={() => buildNumber('3')} />
        <Button
          label="+"
          color={Colors.orange}
          onPress={() => console.log(1)}
        />
      </View>

      <View style={globalStyles.calculatorRow}>
        <Button label="0" doubleSize onPress={() => buildNumber('0')} />
        <Button label="." onPress={() => buildNumber('.')} />
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
