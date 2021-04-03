import React, { useEffect, useState } from "react";
import MainPage from "./pages/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import data from "./config/staticData";
import Info from "./pages/Info/Info";
// import { useDispatch, useSelector } from "react-redux";
// import { selectQuestion, selectQuestionKey } from "./redux/testsSlice";

const App = () => {
  // const [answer, setAnswer] = useState(null);
  // const dispatch = useDispatch();
  // const question = useSelector(selectQuestion);
  // const questionKey = useSelector(selectQuestionKey);

  // useEffect(() => {
  //   setAnswer(question.id);
  // }, [question]);

  // const handleNextQuestion = () => {
  //   dispatch({ type: "CHECK_ANSWER", payload: answer });
  //   setAnswer();
  // };

  console.log(Object.entries(data)[0][1]);

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
        </Sidebar>
      </Switch>
    </Router>
  );
};

export default App;
