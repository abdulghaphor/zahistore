import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import SignIn from "./SignIn";
import SignUpScreen from "./SignUp";
const { Navigator, Screen } = createStackNavigator();
const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={HomeScreen} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUpScreen} />
    </Navigator>
  );
};
export default RootNavigator;
