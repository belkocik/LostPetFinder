import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ObservedPetsScreen from '../ObservedPetsScreen';

const ObservedPetsStack = createNativeStackNavigator();

const ObservedPetsStackScreen = () => {
  return (
    <ObservedPetsStack.Navigator>
      <ObservedPetsStack.Screen name="Observing" component={ObservedPetsScreen} />
    </ObservedPetsStack.Navigator>
  );
};

export default ObservedPetsStackScreen;
