import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import SignIn from "./SignIn";

const { Navigator, Screen } = createStackNavigator();
const AppWrapper = styled.View`
  flex: 1;
  background-color: purple;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Navigator initialRouteName="Home">
          <Screen name="Home" component={Home} />
          <Screen name="SignIn" component={SignIn} />
        </Navigator>
      </NavigationContainer>
      {/* <Text>Hello Fatma!</Text>
      <StatusBar style="auto" /> */}
    </>
  );
}
