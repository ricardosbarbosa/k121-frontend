import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  clear: [],
  alert: ["type", "message"]
});

const INITIAL_STATE = {
  type: null,
  message: null,
};

const clear = (state = INITIAL_STATE, action) => {
  return INITIAL_STATE;
};

const alert = (state = INITIAL_STATE, action) => {
  return { ...state, type: action.type, message: action.message };
};

export default createReducer(INITIAL_STATE, {
  [Types.ALERT]: alert,
  [Types.CLEAR]: clear
});
