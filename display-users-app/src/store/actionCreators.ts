import * as actionTypes from "./actionTypes";

export function getUsers() {
  const action: AppAction = {
    type: actionTypes.GET_USERS_INITIATED,
  };
  return renderRequest(action);
}

export function getPosts() {
  const action: AppAction = {
    type: actionTypes.GET_POSTS_INITIATED,
  };
  return renderRequest(action);
}

export function renderRequest(action: AppAction) {
  return (dispatch: DispatchType) => {
    switch (action.type) {
      case actionTypes.GET_USERS_INITIATED:
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => res.json())
          .then((users: IUsers[]) => {
            const action: AppAction = {
              type: actionTypes.GET_USERS_COMPLETED,
              payload: users,
            };
            dispatch(action);
          })
          .catch((er) => console.log(er));
        break;
      case actionTypes.GET_POSTS_INITIATED:
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
          .then((posts: IPosts[]) => {
            const action: AppAction = {
              type: actionTypes.GET_POSTS_COMPLETED,
              payload: posts,
            };
            dispatch(action);
          })
          .catch((er) => console.log(er));
    }
  };
}
