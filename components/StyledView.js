import styled from "styled-components/native";

const StyledView = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.backgroundColor};
  align-items: center;
  justify-content: center;
  padding: 5%;
`;

export default StyledView;
