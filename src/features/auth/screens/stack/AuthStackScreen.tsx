import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../LoginScreen';
import {useTranslation} from 'react-i18next';

const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () => {
  const {t} = useTranslation();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerTitle: t('loginHeader')}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
