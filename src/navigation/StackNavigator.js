import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Post from '../screens/Post';
import Post2 from '../screens/Post2';
import Post3 from '../screens/Post3';
import Post4 from '../screens/Post4';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#fe6061"
  },
  headerTintColor: "white",
  headerBackTitle: "Back"
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Post" component={Post} options={{ title: 'Post a Project' }}/>
      <Stack.Screen name="Post2" component={Post2} options={{ title: 'Description' }}/>
      <Stack.Screen name="Post3" component={Post3} options={{ title: 'Price' }}/>  
      <Stack.Screen name="Post4" component={Post4} options={{ title: 'Weight' }}/>          
    </Stack.Navigator>
  );
};


export { MainStackNavigator};
