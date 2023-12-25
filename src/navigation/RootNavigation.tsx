import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import TabsNavigation from './tabs/TabsNavigation';
import {useAuthStore} from '@/features/auth/store';
import AuthStackScreen from '@/features/auth/screens/stack/AuthStackScreen';
import {appTheme} from '@/theme';

type Props = {};

const RootNavigation = (_props: Props) => {
  const isAuthorized = useAuthStore(state => state.isAuthorized);

  return (
    <PaperProvider theme={appTheme}>
      <NavigationContainer>
        {isAuthorized ? <TabsNavigation /> : <AuthStackScreen />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default RootNavigation;
