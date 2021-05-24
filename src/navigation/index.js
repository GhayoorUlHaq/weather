import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './appStack';

export default function AppContainer() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
