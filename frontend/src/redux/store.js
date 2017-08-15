import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

import createProjectFields from "./reducers/createProjectFieldsReducer";

export default createStore(
   combineReducers({
       createProjectFields,
   }),
   {},
 // applyMiddleware(logger())
);