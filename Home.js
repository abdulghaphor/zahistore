import React from "react";
import { Button, Text, View } from "react-native";
import styled from "styled-components/native";
import StyledButton from "./StyledButton";

const Home = ({ navigation }) => {
  return (
    <View>
      <StyledButton
        onPress={() => navigation.navigate("SignIn")}
        title="Sign In"
        accessibilityLabel="Learn more about this purple button"
        bgColor="red"
      />
      <Text>Hello World!</Text>
    </View>
  );
};

export default Home;
