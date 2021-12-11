import React from "react";
import { Text, View } from "react-native";
import StyledButton from "./StyledButton";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <StyledButton
        onPress={() => navigation.navigate("SignIn")}
        title="Sign In"
        accessibilityLabel="Learn more about this purple button"
        bgColor="red"
      />
      <StyledButton
        onPress={() => navigation.navigate("SignUp")}
        title="Sign Up"
        accessibilityLabel="Learn more about this purple button"
        bgColor="red"
      />

      <Text>Hello World!</Text>
    </View>
  );
};

export default HomeScreen;
