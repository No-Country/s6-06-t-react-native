import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./reducer/loginReducer";

const rootReducer = combineReducers({
  login: loginReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
