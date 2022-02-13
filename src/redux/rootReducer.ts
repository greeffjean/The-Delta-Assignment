import { combineReducers } from "redux";
import { TAppState } from "../types/appState";
import { userReducer } from "./user/reducer";


export const rootReducer = combineReducers({
  user: userReducer
  });