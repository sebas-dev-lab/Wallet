import React from "react";
import { Route, Switch } from "react-router";

import Home from "./Pages/Home";
import Auth from "./Components/Auth";
import UserDash from "./Pages/UserDash";
import DashProtected from "./Components/Security/DashProtected";

function App() {
  return (
    <Switch>
      {/* Unprotected Routes */}
      <Route exact path="/" component={Home} />
      <Route exact path="/singup" component={() => <Auth type="singup" />} />
      <Route exact path="/singin" component={() => <Auth type="login" />} />
      {/* Protected Routes */}
      <DashProtected exact path="/dash" component={UserDash} />
    </Switch>
  );
}
export default App;
