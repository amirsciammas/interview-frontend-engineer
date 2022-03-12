import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PostItem from "./PostItem";

describe("<PostItem />", () => {
  test("it should mount", () => {
    render(
      <PostItem
        post={{
          userId: 0,
          id: 0,
          title: "",
          body: "",
        }}
      />
    );

    const postItem = screen.getByTestId("PostItem");

    expect(postItem).toBeInTheDocument();
  });
});
