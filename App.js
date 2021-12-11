import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import RootNavigator from "./components/RootNavigator";
import theme from "./assets/theme";
import Header from "./components/Header";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
