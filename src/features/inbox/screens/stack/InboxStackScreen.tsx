import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InboxScreen from '../InboxScreen';

const InboxStack = createNativeStackNavigator();

const InboxStackScreen = () => {
  return (
    <InboxStack.Navigator>
      <InboxStack.Screen name="Inbox" component={InboxScreen} />
    </InboxStack.Navigator>
  );
};

export default InboxStackScreen;
