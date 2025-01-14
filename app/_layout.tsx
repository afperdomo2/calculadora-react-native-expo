import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import { Colors } from '@/constants/Colors';

const _layout = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={{ backgroundColor: Colors.background, flex: 1 }}>
      <Slot />

      <StatusBar style="light" />
    </View>
  );
};

export default _layout;
