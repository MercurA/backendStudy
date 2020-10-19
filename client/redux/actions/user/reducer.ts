import IUserState from '../../../interfaces/IUserState';
import { IUserActions, SET_USER } from './types';

const initialState: IUserState = {
    user: null
};
function userReducer(state = initialState, action: IUserActions): IUserState {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            };
        default: {
            return state;
        }
    }
}

export default userReducer;
