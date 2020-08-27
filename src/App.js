import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/global.scss";
import Home from "./pages/Home/index";
import Forms from "./pages/Forms/index";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/forms" component={Forms} exact />
        <Route path="/auth" component={Login} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
