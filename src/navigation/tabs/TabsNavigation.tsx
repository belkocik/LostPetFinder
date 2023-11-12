import React from 'react';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import HomeStackScreen from '@/features/home/screens/stack/HomeStackScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileStackScreen from '@/features/profile/screens/stack/ProfileStackScreen';
import InboxStackScreen from '@/features/inbox/screens/stack/InboxStackScreen';
import ObservedPetsStackScreen from '@/features/observed-pets/screens/stack/ObservedPetsStackScreen';

const Tab = createMaterialBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="HomeStack" activeColor="#e91e63" shifting={true}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home-variant-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ObservedPetsStack"
        component={ObservedPetsStackScreen}
        options={{
          tabBarLabel: 'Observing',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cards-heart-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="InboxStack"
        component={InboxStackScreen}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="inbox-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
