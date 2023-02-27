import { createContext, useReducer } from "react";
import { reducer } from "../rootReducer";
import { TpostsProps } from "../Services/posts";
import { TUsersResponse } from "../Services/users";
import { TactionsTypes } from "../types";

const initialState: TInitialState = {
    users: [],
    posts: []
}

export type TInitialState = {
    users: TUsersResponse[],
    posts: TpostsProps[]
}

type ContextProps = {
    data: TInitialState;
    dispatch: React.Dispatch<TactionsTypes>;
}

export const DataStore = createContext<ContextProps>({ data: initialState, dispatch: () => null });

export const StoreProvider = ({ children }: {
    children: React.ReactNode;
}) => {
    const [data, dispatch] = useReducer(reducer, initialState);

    return (<DataStore.Provider value={{ data, dispatch }}>
        {children}
    </DataStore.Provider>)

}