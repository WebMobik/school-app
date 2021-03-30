import React, { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
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

  return (
    <Router>
      <Switch>
        <Sidebar>
          <Route exact path="/">
            <MainPage />
          </Route>
        </Sidebar>
      </Switch>
    </Router>
  );
};

export default App;
