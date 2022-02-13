import { combineReducers } from "redux";
import { TAppState } from "../types/appState";
import { gamesReducer } from "./game/reducer";
import { userReducer } from "./user/reducer";


export const rootReducer = combineReducers<TAppState>({
  user: userReducer,
  games: gamesReducer
  });