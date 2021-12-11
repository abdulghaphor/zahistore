import React from "react";
import styled from "styled-components/native";
const ButtonContainer = styled.TouchableOpacity`
  margin-vertical: 40px;
  width: 120px;
  height: 40px;
  padding: 8px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.lightPrimaryColor};
  border: 1px solid ${({ theme }) => theme.primaryColor};
`;
const ButtonText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.fontColor};
  text-align: center;
`;
const StyledButton = ({ onPress, title, bgColor }) => (
  <ButtonContainer onPress={onPress} bgColor={bgColor}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);
export default StyledButton;
