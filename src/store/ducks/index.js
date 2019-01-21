import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import sorteios from "./sorteios";
import members from "./members";
import alert from "./alert";

export const history = createBrowserHistory();

//reducers
export default combineReducers({
  router: connectRouter(history),
  sorteios,
  members,
  alert,
  form: formReducer
});
