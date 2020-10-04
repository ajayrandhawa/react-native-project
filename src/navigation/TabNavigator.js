import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainStackNavigator } from "./StackNavigator";

import { Ionicons } from '@expo/vector-icons';
import Homepage from '../screens/Homepage';
import Mytasks from '../screens/Mytasks'
import Post from '../screens/Post';
import Invoice from '../screens/Invoice';
import Notification from '../screens/Notification';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{
        style: {
            height: 60
          },
          showLabel: true,
          showIcon: true,
          tintColor: '#fe6061',
          activeTintColor: '#fe6061',
          labelStyle : {
              fontSize : 12,
              marginBottom: 8
          }
    }}>
        <Tab.Screen name="Home" component={Homepage} options={{tabBarIcon: ({color}) => (<Ionicons name="ios-home" size={20} color={color}/>) }}  />
        <Tab.Screen name="My Tasks" component={Mytasks} options={{tabBarIcon: ({color}) => <Ionicons name="ios-copy" size={20}  color={color}/>}}/>
        <Tab.Screen name="Invoice" component={Invoice} options={{tabBarIcon: ({color}) => <Ionicons name="md-add-circle" size={20} color={color}/>}}/>
        <Tab.Screen name="Post" component={MainStackNavigator} options={{tabBarIcon: ({color}) => <Ionicons name="ios-paper" size={20} color={color}/>}}/>
        <Tab.Screen name="Notification" component={Notification} options={{tabBarIcon: ({color}) => <Ionicons name="md-notifications" size={20} color={color}/>}}/>
    </Tab.Navigator>
  );
}

export default BottomTabNavigator