import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import createSagaMiddleware from "redux-saga";
import testsSlice from "./redux/testsSlice";
import reportWebVitals from "./reportWebVitals";
import mySaga from "./sagas";
import App from "./App";

import "./index.css";
import { Provider } from "react-redux";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tests: testsSlice
  },
  middleware: [sagaMiddleware, logger]
});

sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
