import { IUserInfo } from '../../../interfaces/IFormState';

export const SET_NAME = 'SET_NAME';

interface SET_NAME_TO_STATE {
    type: typeof SET_NAME;
    payload: IUserInfo;
}

export type IActions = SET_NAME_TO_STATE;
