import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import {colors} from '../utils';

const App = createStackNavigator();

const AppStack = () => (
  <App.Navigator initialRouteName="weather">
    <App.Screen
      name="weather"
      options={{
        headerTitleStyle: {alignSelf: 'center'},
        headerBackTitleVisible: false,
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        title: 'WeatherApp',
      }}
      component={Home}
    />
    <App.Screen
      name="details"
      options={{
        headerTitleStyle: {alignSelf: 'center'},
        headerBackTitleVisible: false,
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        title: 'WeatherApp',
      }}
      component={Details}
    />
  </App.Navigator>
);

export default AppStack;
