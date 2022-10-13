import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];

test("renders technical evaluation app", () => {
  const initialState = { users: [], posts: [] };
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Technical Evaluation App/i);
  expect(linkElement).toBeInTheDocument();
});
