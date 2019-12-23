import * as React from 'react';

import HomeScreen  from './screens/HomeScreen';
import ReaderScreen  from './screens/ReaderScreen';


import { Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Article: {
    screen: ReaderScreen,
  }
});

export default createAppContainer(AppNavigator);