import { createReducer } from "redux-act";
import { TData, TPayloadData } from "../../types/commonTypes";
import {
  requestGamesData,
  requestGamesDataSuccess,
  requestGamesDataFail,
  requestDealLookup,
  requestDealLookupSuccess,
} from "./actions";

export type TDeal = {
  dealID: string;
  salePrice: string;
  normalPrice: string;
  thumb: string;
  title: string;
  storeID: string;
};

export type TDealLookup = {
  cheaperStores: any;
  cheapestPrice: any;
  gameInfo: any;
};

export type TMainState = {
  isLoading: boolean;
  error: any | null;
  games: TData[] | null;
  stores: TData[] | null;
  dealLookup: TDealLookup | null;
};

const defaultState: TMainState = {
  isLoading: false,
  error: null,
  games: null,
  stores: null,
  dealLookup: null,
};

export const mainReducer = createReducer({}, defaultState);

// Action Calls =>
mainReducer
  .on(requestGamesData, (state) => ({
    ...state,
    isLoading: true,
  }))
  .on(requestGamesDataSuccess, (state, payload: TPayloadData) => ({
    ...state,
    isLoading: false,
    games: payload.deals,
    stores: payload.stores,
  })).on(requestDealLookup, (state) => ({
    ...state,
    isLoading: true,
  }))
  .on(requestDealLookupSuccess, (state, payload: TDealLookup) => ({
    ...state,
    isLoading: false,
    dealLookup: payload,
  }))
  .on(requestGamesDataFail, (state, err) => ({
    ...state,
    isLoading: false,
    error: err,
  }));
