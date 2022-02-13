import { TAppState } from "../../types/appState";

export const selectIsLoading = (state: TAppState) => state.games.isLoading;

export const selectGamesData = (state: TAppState) => state.games.games;
export const selectStoresData = (state: TAppState) => state.games.stores;
export const selectError = (state: TAppState) => state.games.error;
