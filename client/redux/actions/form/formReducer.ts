import IFormData from '../../../interfaces/IFormState';
import { IActions, SET_NAME } from './actionTypes';

const initialState: IFormData = {
    userInfo: []
};

function formReducer(state = initialState, actions: IActions): IFormData {
    switch (actions.type) {
        case SET_NAME:
            return {
                ...state,
                userInfo: [...state.userInfo, ...[actions.payload]]
            };
        default: {
            return state;
        }
    }
}

export default formReducer;
