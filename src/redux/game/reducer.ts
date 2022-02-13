import { createReducer } from "redux-act";
import { TData, TPayloadData } from "../../types/commonTypes";
import {
    requestGamesData,
    requestGamesDataSuccess,
    requestGamesDataFail
} from "./actions";


export type TGamesState = {
    isLoading: boolean,
    error: any | null,
    games: TPayloadData | null;
    stores: TPayloadData | null;
}

const defaultState: TGamesState  = {
    isLoading: false,
    error: null,
    games: null,
    stores: null
}

export const gamesReducer = createReducer({}, defaultState)

// Action Calls => 
gamesReducer.on(requestGamesData, (state) => ({
    ...state,
    isLoading: true
})).on(requestGamesDataSuccess, (state, payload: TPayloadData) => ({
    ...state,
    isLoading: false,
    games: payload
})).on(requestGamesDataFail, (state, err) => ({
    ...state,
    isLoading: false,
    error: err
}));