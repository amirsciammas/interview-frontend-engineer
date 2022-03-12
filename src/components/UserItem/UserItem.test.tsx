import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserItem from "./UserItem";

describe("<UserItem />", () => {
  test("it should mount", () => {
    render(
      <UserItem
        user={{
          id: 0,
          name: "",
          username: "",
          email: "",
          address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
              lat: "",
              lng: "",
            },
          },
          phone: "",
          website: "",
          company: {
            name: "",
            catchPhrase: "",
            bs: "",
          },
        }}
      />
    );

    const userItem = screen.getByTestId("UserItem");

    expect(userItem).toBeInTheDocument();
  });
});
