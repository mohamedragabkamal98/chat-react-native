import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Loginscreen from './Screens/Loginscreen';
import HomeScreen from './Screens/HomeScreen';
import AuthLoadingScreen from './Screens/AuthLoadingScreen';
import ChatScreen from './Screens/ChatScreen';
import ProfileScreen from './Screens/ProfileScreen';
const AppStack = createStackNavigator({ Home: HomeScreen , Chat: ChatScreen ,Profile:ProfileScreen});
const AuthStack = createStackNavigator({ Login: Loginscreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));