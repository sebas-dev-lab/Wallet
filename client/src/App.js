import React from "react";
import { Route, Switch } from "react-router";

import Home from "./Pages/Home";
import Auth from "./Components/Auth";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/singup" component={() => <Auth type="singup" />} />
      <Route exact path="/singin" component={() => <Auth type="login" />} />
    </Switch>
  );
}
export default App;