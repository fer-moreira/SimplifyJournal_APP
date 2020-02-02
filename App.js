import * as React from 'react';

import HomeScreen  from './src/components/Homescreen/HomeScreen';
import ReaderScreen  from './src/components/Readerscreen/ReaderScreen';


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