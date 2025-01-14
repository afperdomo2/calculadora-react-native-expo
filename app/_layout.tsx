import { View, Text } from 'react-native';
import React from 'react';
import { Slot } from 'expo-router';

const _layout = () => {
  return (
    <View>
      <Text>Header</Text>

      <Slot />

      <Text>Footer</Text>
    </View>
  );
};

export default _layout;
