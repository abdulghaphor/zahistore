import styled from "styled-components/native";

const StyledTextInput = styled.TextInput`
  background-color: white;
  border-bottom-width: 3px;
  border-bottom-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.primaryColor};
  font-weight: bold;
  font-size: 20px;
  width: 100%;
  height: 30px;
  margin-bottom: 10%;
  background-color: ${({ theme }) => theme.lightPrimaryColor};
`;

export default StyledTextInput;
