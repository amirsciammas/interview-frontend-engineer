import { useDispatch } from "react-redux";
import { createStore, applyMiddleware, Store, AnyAction } from "redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import reducer from "./reducer";

export const store: Store<AppState, AppAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof reducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useAppDispatch: () => AppDispatch = useDispatch;
