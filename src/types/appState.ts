
import { TMainState } from '../redux/main/reducer';
import { TUserState } from '../redux/user/reducer';

export type TAppState = {
    user: TUserState,
    main: TMainState
}