import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

//reducers
import pessoas from "./pessoas";
export default combineReducers({
  pessoas,
  form: formReducer
});
