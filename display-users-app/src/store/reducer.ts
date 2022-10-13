import * as actionTypes from "./actionTypes";

const initialState: AppState = {
  users: [],
  posts: [],
};

const reducer = (
  state: AppState = initialState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case actionTypes.GET_USERS_INITIATED:
    case actionTypes.GET_POSTS_INITIATED:
      return {
        ...state,
      };
    case actionTypes.GET_USERS_COMPLETED:
      return {
        ...state,
        users: action.payload,
      };
    case actionTypes.GET_POSTS_COMPLETED:
      return {
        ...state,
        posts: action.payload,
      };
  }
  return state;
};

export default reducer;
