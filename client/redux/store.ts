import { MakeStore } from 'next-redux-wrapper';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import tunkMiddleware from 'redux-thunk';

import formReducer from './actions/form/formReducer';
import userReducer from './actions/user/reducer';

const rootReducer = combineReducers({
    formData: formReducer,
    userData: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const makeStore: MakeStore = () => {
    const middlewares = [tunkMiddleware];
    const middlewaresEnhancer = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, middlewaresEnhancer);

    return store;
};

export default makeStore;
