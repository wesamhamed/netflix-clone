import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import {Home,Browse,SignIn,SignUp} from "./pages";
import * as ROUTES from "./constants/routes";

export function App() {

  return (
    <Router>
      <Route path={ROUTES.HOME} exact component={Home}/>
      <Route path={ROUTES.BROWSE} exact component={Browse}/>
      <Route path={ROUTES.SIGN_IN} exact component={SignIn}/>
      <Route path={ROUTES.SIGN_UP} exact component={SignUp}/>
    </Router>
  );
}