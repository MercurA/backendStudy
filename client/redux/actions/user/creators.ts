import { IUser } from 'interfaces/IUserState';
import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from '../../store';
import { IUserActions, SET_USER } from './types';

export const dispatchUserToState = (
    params: IUser
): ThunkAction<void, RootState, () => Record<string, unknown>, Action<string>> => async (
    dispatch: Dispatch<Action>
) => {
    dispatch(setUserToState(params));
};

function setUserToState(payload: IUser): IUserActions {
    return {
        type: SET_USER,
        payload
    };
}
