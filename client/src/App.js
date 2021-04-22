import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Auth from "./Components_new/Auth";
import DashProtected from "./Components_new/Security/DashProtected";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "./Components_new/style/Theme";
import { THEMES } from "./Components_new/services/constants";
import Dashboard from "./Components_new/UserDash/index.jsx";
import Home from "./Pages/Home";

function App() {
  const [themeState, setThemeState] = useState({
    mode: "LIGHT",
  });
  const toggle = () => {
    const mode = themeState.mode === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setThemeState({ ...themeState, mode: mode });
  };
  const theme = createTheme({ theme: themeState.mode });

  return (
    <Switch>
      <ThemeProvider theme={theme}>
        {/* Unprotected Routes */}
        <Home toggle={toggle} themeState={themeState} />
        <Route exact path="/singup" component={() => <Auth type="singup" />} />
        <Route exact path="/singin" component={() => <Auth type="login" />} />
        {/* Protected Routes */}
        <DashProtected
          exact
          path="/dash"
          toggle={toggle}
          themeState={themeState}
          component={Dashboard}
        />
      </ThemeProvider>
    </Switch>
  );
}
export default App;
