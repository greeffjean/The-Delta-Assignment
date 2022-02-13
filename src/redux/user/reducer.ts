import { createReducer } from "redux-act";

export type TUserState = {
    userAccess: { [key: string]: boolean }
}

const defaultState: TUserState = {
    userAccess: {
       allDeals: true,
       allStores: true,
       dealDetails: true
    }
}

export const userReducer = createReducer({}, defaultState)