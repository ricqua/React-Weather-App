// import jsonReducer from "./jsonReducer";
// import inputTextReducer from "./inputTextReducer";
// import counterReducer from "./counterReducer";
// import trueFalseReducer from "./trueFalseReducer";
// import spinnerReducer from "./spinnerReducer";
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
