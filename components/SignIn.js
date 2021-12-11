import React from "react";
import { useState } from "react";
import StyledButton from "./StyledButton";
import StyledTextInput from "./StyledTextInput";
import StyledView from "./StyledView";
import StyledText from "./StyledText";

const SignIn = ({ navigation }) => {
  const [payload, setPayload] = useState({ username: "", password: "" });

  return (
    <StyledView>
      <StyledText>Username</StyledText>
      <StyledTextInput
        autoFocus={true}
        autoCapitalize="none"
        onChangeText={(text) =>
          setPayload((prevState) => ({
            ...prevState,
            username: text,
          }))
        }
      />
      <StyledText>Password</StyledText>
      <StyledTextInput
        secureTextEntry={true}
        onChangeText={(text) =>
          setPayload((prevState) => ({
            ...prevState,
            password: text,
          }))
        }
      />

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
