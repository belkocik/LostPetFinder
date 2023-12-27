import React from 'react';
import HomeScreen from '../HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
