import { IUser } from 'interfaces/IUserState';

export const SET_USER = 'SET_USER';

export interface SET_USER_STATE {
    type: typeof SET_USER;
    payload: IUser;
}

export type IUserActions = SET_USER_STATE;
