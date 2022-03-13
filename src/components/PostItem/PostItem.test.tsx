import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PostItem from "./PostItem";
import renderer from "react-test-renderer";

const post = {
  userId: 0,
  id: 0,
  title: "",
  body: "",
};

describe("<PostItem />", () => {
  test("it should mount", () => {
    render(<PostItem post={post} />);

    const postItem = screen.getByTestId("PostItem");
    expect(postItem).toBeInTheDocument();
  });

  test("renders user data", () => {
    render(<PostItem post={post} />);
    const postItemTitle = screen.getByTestId("PostItem.title");
    expect(postItemTitle.textContent).toBe(post.title);

    const postItemBody = screen.getByTestId("PostItem.body");
    expect(postItemBody.textContent).toBe(post.body);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<PostItem post={post} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
