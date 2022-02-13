import { TAppState } from "../../types/appState";

export const selectIsLoading = (state: TAppState) => state.main.isLoading;

export const selectGamesData = (state: TAppState) => state.main.games;
export const selectStoresData = (state: TAppState) => state.main.stores;
export const selectError = (state: TAppState) => state.main.error;

export const selectDealLookup = (state: TAppState) => state.main.dealLookup;

