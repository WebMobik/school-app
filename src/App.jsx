import React from "react";
import MainPage from "./pages/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import data from "./config/staticData";
import Info from "./pages/Info/Info";
import TestApp from "./pages/TestApp/TestApp";

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
          <Route path="/testOne">
            <TestApp />
          </Route>
        </Sidebar>
      </Switch>
    </Router>
  );
};

export default App;
