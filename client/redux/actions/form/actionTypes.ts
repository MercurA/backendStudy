import { IUserInfo } from '../../../interfaces/IFormState';

export const SET_NAME = 'SET_NAME';
export const SET_SPELLS = 'SET_SPELLS';

interface SET_NAME_TO_STATE {
    type: typeof SET_NAME;
    payload: IUserInfo;
}

interface SET_SPELLS_TO_STATE {
    type: typeof SET_SPELLS;
    payload: Record<string, unknown>[];
}

export type IActions = SET_NAME_TO_STATE | SET_SPELLS_TO_STATE;
