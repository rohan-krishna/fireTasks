/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useEffect} from 'react';
// import { mapping, light as lightTheme } from '@eva-design/eva';
// import { ApplicationProvider, Layout, Text, Button } from 'react-native-ui-kitten';
import { Provider as PaperProvider } from 'react-native-paper';
import { TodoList } from './src/components/TodoList';
import HeaderBar from './src/components/HeaderBar';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import FooterButton from './src/components/FooterButton';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import NewTaskScreen from './src/screens/NewTaskScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  NewTask: { screen: NewTaskScreen },
});

const App = createAppContainer(MainNavigator);

export default App;
