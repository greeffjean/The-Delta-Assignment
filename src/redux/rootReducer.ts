import { combineReducers } from "redux";
import { TAppState } from "../types/appState";
import { mainReducer } from "./main/reducer";
import { userReducer } from "./user/reducer";


export const rootReducer = combineReducers<TAppState>({
  user: userReducer,
  main: mainReducer
  });