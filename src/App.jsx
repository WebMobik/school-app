import React from "react";
import MainPage from "./pages/Main";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import data from "./config/staticData";
import Sidebar from "./components/Sidebar";
import Signin from './components/Signin'
import Info from "./pages/Info/Info";
import TestApp from "./pages/TestApp/TestApp";
import auth from './api/helpers'
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <Router>
      <Switch>
        <Sidebar>
          <Route exact path="/">
            <MainPage />
          </Route>
          {Object.entries(data)[0][1].map(
            ({ id, page, title, content, example }) => (
              <Route key={id} path={page}>
                <Info title={title} content={content} example={example} />
              </Route>
            )
          )}
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/test">
            <TestApp />
          </Route>
          <Route path="/sign-in">
            <Signin />
          </Route>
          <Route path="/signout" render={() => {
            auth.clearJWT()
            return <Redirect to="/" />
          }} />
        </Sidebar>
      </Switch>
    </Router>
  );
};

export default App;
