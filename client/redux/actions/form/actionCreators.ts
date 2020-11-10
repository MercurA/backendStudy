import { Dispatch } from 'react';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { IUserInfo } from '../../../interfaces/IFormState';
import { RootState } from '../../store';
import { IActions, SET_NAME, SET_SPELLS } from './actionTypes';

const BASE_URL = 'https://www.dnd5eapi.co/api/';

export const dispatchFormToState = (
    params: IUserInfo
): ThunkAction<void, RootState, () => Record<string, unknown>, Action<string>> => async (
    dispatch: Dispatch<Action>
) => {
    dispatch(setNameToState(params));
};

export const dispatchSpellsToState = (): ThunkAction<
    void,
    RootState,
    () => Record<string, unknown>,
    Action<string>
> => async (dispatch: Dispatch<Action>) => {
    const res = await getArrows();
    dispatch(setSpellsToState(res.results));
};

export async function getArrows(): Promise<any> {
    const res = await fetch(`${BASE_URL}spells`);
    const resJson = res.json();
    return resJson;
}

export function setSpellsToState(res: Record<string, unknown>[]): IActions {
    return {
        type: SET_SPELLS,
        payload: res
    };
}

export function setNameToState(payload: IUserInfo): IActions {
    return {
        type: SET_NAME,
        payload
    };
}
