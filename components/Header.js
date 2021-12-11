import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const StyledView = styled.View`
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  height: 110px;
  padding-top: 30px;
  background-color: white;
`;
const Header = () => {
  return (
    <StyledView>
      <Text>This is a header</Text>
    </StyledView>
  );
};
export default Header;
