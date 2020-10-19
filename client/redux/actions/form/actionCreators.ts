import { Dispatch } from 'react';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { IUserInfo } from '../../../interfaces/IFormState';
import { RootState } from '../../store';
import { IActions, SET_NAME } from './actionTypes';

export const dispatchFormToState = (
    params: IUserInfo
): ThunkAction<void, RootState, () => Record<string, unknown>, Action<string>> => async (
    dispatch: Dispatch<Action>
) => {
    dispatch(setNameToState(params));
};

export function setNameToState(payload: IUserInfo): IActions {
    return {
        type: SET_NAME,
        payload
    };
}
