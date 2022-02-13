import { createReducer } from "redux-act";

export type TUserState = {
    userAccess: { [key: string]: boolean }
}

const defaultState: TUserState = {
    userAccess: {
        home: true,
        dashboardOne: true,
        dashboardTwo: true,
    }
}

export const userReducer = createReducer({}, defaultState)