import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";
import App from "./containers/App";
import { searchRobots, getRobotsReducer } from "./components/reducers";
import "./index.css";

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, getRobotsReducer });
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
