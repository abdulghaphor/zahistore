import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import StyledButton from "./StyledButton";

const StyledView = styled.View`
  flex: 1;
  background: white;
  align-items: center;
  justify-content: center;
  padding: 5%;
`;
const StyledTextInput = styled.TextInput`
  background-color: white;
  border-bottom-width: 3px;
  border-bottom-color: #ccc;
  width: 100%;
  height: 30px;
  margin-bottom: 10%;
  background-color: #f2f2f2;
`;
const StyledText = styled.Text`
  align-self: flex-start;
  color: black;
  font-size: 16px;
`;
const SignIn = ({ navigation }) => {
  return (
    <StyledView>
      <StyledText>Username</StyledText>
      <StyledTextInput />
      <StyledText>Password</StyledText>
      <StyledTextInput />

      <StyledButton
        onPress={() => navigation.navigate("SignIn")}
        title="Sign In"
        accessibilityLabel="Learn more about this purple button"
        bgColor="#f2f2f2"
      />
    </StyledView>
  );
};

export default SignIn;
