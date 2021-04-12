import React from "react";
import { Statusbar } from "react-native";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Navigation from "./navigations";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Statusbar backgroundColor={theme.background} barStyle="dark-content" />
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
