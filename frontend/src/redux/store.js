import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

import createProjectFields from "./reducers/createProjectFieldsReducer";
import project from "./reducers/project";

export default createStore(
   combineReducers({
       project,
   }),
   {},
 // applyMiddleware(logger())
);