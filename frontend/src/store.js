import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

import createProject from "./reducers/createProjectReducer";

export default createStore(
   combineReducers({
       createProject,
   }),
   {},
  // applyMiddleware(logger())
);