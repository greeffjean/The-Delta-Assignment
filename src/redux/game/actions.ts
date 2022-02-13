import { createAction } from 'redux-act';

export const requestGamesData = createAction('REQUEST_GAMES_DATA');
export const requestGamesDataSuccess = createAction<any>('REQUEST_GAMES_DATA_SUCCESS');
export const requestGamesDataFail = createAction<any>('REQUEST_GAMES_DATA_FAIL');