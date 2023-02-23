/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */

import { render, screen } from "@testing-library/react";
import App from "./App";
import { AdiGramContext } from "../src/contextAPI/Context";
import { MockUserData, MockPostData } from "../src/mocks/mockData";

test("Case 1: Checking Logo", () => {
  render(<App />);
  const linkElement = screen.getByText("AdiGram");
  expect(linkElement).toBeInTheDocument();
});

test("Case 2: Basic Renders", () => {
  const { container } = render(<App />);

  const MainComponent = screen.getByTestId("main-container");
  expect(MainComponent).toBeInTheDocument();

  const headerComp = container.querySelector<HTMLElement>(".header");
  expect(headerComp).toBeInTheDocument();

  const FooterComp = container.querySelector<HTMLElement>(".footer");
  expect(FooterComp).toBeInTheDocument();
});

test("Case 3: Testing User and Post renders", () => {
  const contextValue = {
    userLists: MockUserData,
    setUserLists: () => [],
    openModal: false,
    handleOpen: () => {},
    handleClose: () => {},
    userPosts: MockPostData,
    setUserPosts: () => [],
    selectedUser: MockUserData[0],
    setSelectedUser: () => [],
  };
  const { container } = render(
    <AdiGramContext.Provider value={contextValue}>
      <App />
    </AdiGramContext.Provider>
  );

  const MainComp = screen.getByTestId("main-container");
  expect(MainComp).toBeInTheDocument();

  const userContainer = container.querySelector(".users-container");
  expect(userContainer).toBeInTheDocument();
});
