import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import { globalStyles } from '@/styles/global-styles';

const _layout = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={globalStyles.background}>
      <Slot />

      <StatusBar style="light" />
    </View>
  );
};

export default _layout;
