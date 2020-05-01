import { combineReducers } from "redux";

import remanState from './reman';


const rootReducer = combineReducers(
    {
        remanState
    }
);

export const rootReducerWrapper = (state, action) => {
    return rootReducer(state, action);
};