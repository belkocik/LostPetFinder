import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import TabsNavigation from './tabs/TabsNavigation';

type Props = {};

const RootNavigation = (_props: Props) => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <TabsNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default RootNavigation;
