import fetchFormReducer from "./fetchFormReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  fetchFormState: fetchFormReducer,
  //   json: jsonReducer,
  //   counter: counterReducer,
  //   truefalse: trueFalseReducer,
  //   loading: spinnerReducer,
});

export default rootReducer;
