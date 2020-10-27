import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import FormContextProvider from "./context/FormContext";
import "./styles/global.scss";
import Home from "./pages/Home/index";
import Forms from "./pages/Forms/index";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Find from "./pages/Find";
import NewForm from "./pages/NewForm";
import Analysis from "./pages/analysis";
import User from "./pages/User";
import SignUp from "./pages/SignUp";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = sessionStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" component={Home} exact />
        <PrivateRoute path="/forms" component={Forms} exact />
        <Route path="/auth" component={Login} exact />
        <Route path="/signup" component={SignUp} exact />
        <PrivateRoute path="/detail/:id" component={Detail} exact />
        <PrivateRoute path="/find" component={Find} exact />
        <FormContextProvider>
          <PrivateRoute path="/newform" component={NewForm} exact />
        </FormContextProvider>
        <PrivateRoute path="/analysis" component={Analysis} exact />
        <PrivateRoute path="/:nome" component={Home} exact />
        <PrivateRoute path="/user" component={User} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
