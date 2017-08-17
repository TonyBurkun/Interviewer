import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

import project from "./reducers/project";
import notifications from "./reducers/notifications";
import sideBar from './reducers/sideBar';

export default createStore(
   combineReducers({
       project,
       notifications,
       sideBar
   }),
   {},
 // applyMiddleware(logger())
);