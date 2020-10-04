
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigation/TabNavigator";
import Homepage from './src/screens/Homepage';

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );
  }
}