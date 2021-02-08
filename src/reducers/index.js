import globalReducer from "./globalReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  globalState: globalReducer,
  //   json: jsonReducer,
  //   counter: counterReducer,
  //   truefalse: trueFalseReducer,
  //   loading: spinnerReducer,
});

export default rootReducer;
