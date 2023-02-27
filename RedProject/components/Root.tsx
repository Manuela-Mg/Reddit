import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import Profile from "./Profile";
import Welcome from "./Welcome";
import { NavigationContainer } from "@react-navigation/native";

type RootStackParamList = {
  Home: undefined,
  Welcome: undefined,
  Profile: { name: string }; 
};


const Stack = createStackNavigator<RootStackParamList>();

export default function Root() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}