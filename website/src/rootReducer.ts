import { TInitialState } from "./StoreProvider/provider";
import { TactionsTypes } from "./types";

export const reducer = (state: TInitialState, action: TactionsTypes) => {
    switch (action.type) {
        case "SET_USERS":
            return {...state, users: action.data};
        case "SET_POSTS":
            return {...state, posts: action.data};
        default:
            return state;
    }
};