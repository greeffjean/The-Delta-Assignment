import { createAction } from 'redux-act';
import { TData, TPayloadData } from '../../types/commonTypes';
import { TDeal, TDealLookup } from './reducer';

export const requestGamesData = createAction('REQUEST_GAMES_DATA');
export const requestGamesDataSuccess = createAction<TPayloadData>('REQUEST_GAMES_DATA_SUCCESS');
export const requestGamesDataFail = createAction<any>('REQUEST_GAMES_DATA_FAIL');

export const requestDealLookup = createAction<string>('REQUEST_DEAL_LOOKUP')
export const requestDealLookupSuccess = createAction<TDealLookup>('REQUEST_DEAL_LOOKUP_SUCCESS')
