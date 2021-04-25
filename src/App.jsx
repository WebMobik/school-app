import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsFinal } from "./redux/testsSlice";
import data from "./config/staticData";
import MainPage from "./pages/Main";
import Sidebar from "./components/Sidebar";
import Signin from "./components/Signin";
import Profile from "./components/Profile/Profile";
import ItemInfo from "./components/ItemInfo";
import Result from "./components/Result";
import TestApp from "./pages/TestApp/TestApp";
import auth from "./api/helpers";

const App = () => {
  const isTestFinal = useSelector(selectIsFinal)
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
                <ItemInfo title={title} content={content} example={example} />
              </Route>
            )
          )}
          <Route path="/profile">
            <Profile />
          </Route>
          {auth.isAuthenticate().session && (
            <Route path="/test">
              <TestApp />
            </Route>
          )}
          <Route path="/sign-in">
            <Signin />
          </Route>
          {isTestFinal && (
            <Route path="/result">
              <Result />
            </Route>
          )}
          <Route
            path="/signout"
            render={() => {
              auth.clearJWT();
              return <Redirect to="/" />;
            }}
          />
          <Route>
            <Redirect to="/" />
          </Route>
        </Sidebar>
      </Switch>
    </Router>
  );
};

export default App;
