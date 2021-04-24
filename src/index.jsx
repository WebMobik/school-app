import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import testsSlice from "./redux/testsSlice";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

import "./index.css";

const store = configureStore({
  reducer: {
    tests: testsSlice
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
