import React from "react";
import { useState } from "react";
import StyledButton from "./StyledButton";
import StyledTextInput from "./StyledTextInput";
import StyledView from "./StyledView";
import StyledText from "./StyledText";

const SignUpScreen = ({ navigation }) => {
  const [payload, setPayload] = useState({
    full_name: "",
    username: "",
    password: "",
  });

  return (
    <StyledView>
      <StyledText>Full Name</StyledText>
      <StyledTextInput
        autoFocus={true}
        onChangeText={(text) =>
          setPayload((prevState) => ({
            ...prevState,
            full_name: text,
          }))
        }
      />
      <StyledText>Phone Number</StyledText>
      <StyledTextInput
        autoFocus={true}
        keyboardType="phone-pad"
        onChangeText={(text) =>
          setPayload((prevState) => ({
            ...prevState,
            phone_number: text,
          }))
        }
      />

      <StyledText>Username</StyledText>
      <StyledTextInput
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

export default SignUpScreen;
