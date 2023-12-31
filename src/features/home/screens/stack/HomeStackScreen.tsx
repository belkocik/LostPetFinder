import React from 'react';
import HomeScreen from '../HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeHeader from '../../components/HomeHeader';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{header: HomeHeader, headerShown: true}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
