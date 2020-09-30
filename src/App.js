import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/global.scss";
import Home from "./pages/Home/index";
import Forms from "./pages/Forms/index";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Find from "./pages/Find";
import NewForm from "./pages/NewForm";
import Analysis from "./pages/analysis";
import User from "./pages/User"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/forms" component={Forms} exact />
        <Route path="/auth" component={Login} exact />
        <Route path="/detail/:id" component={Detail} exact />
        <Route path="/find" component={Find} exact />
        <Route path="/newform" component={NewForm} exact />
        <Route path="/analysis" component={Analysis} exact />
        <Route path="/detailUser/:name" component={Home} exact/>
        <Route path="/user" component={User} exact/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
