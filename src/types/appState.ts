
import { TGamesState } from '../redux/game/reducer';
import { TUserState } from '../redux/user/reducer';

export type TAppState = {
    user: TUserState,
    games: TGamesState
}