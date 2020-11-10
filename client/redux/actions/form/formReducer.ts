import IFormData from '../../../interfaces/IFormState';
import { IActions, SET_NAME, SET_SPELLS } from './actionTypes';

const initialState: IFormData = {
    userInfo: [],
    spells: []
};

function formReducer(state = initialState, actions: IActions): IFormData {
    switch (actions.type) {
        case SET_NAME:
            return {
                ...state,
                userInfo: [...state.userInfo, ...[actions.payload]]
            };
        case SET_SPELLS:
            return {
                ...state,
                spells: actions.payload
            };
        default: {
            return state;
        }
    }
}

export default formReducer;
