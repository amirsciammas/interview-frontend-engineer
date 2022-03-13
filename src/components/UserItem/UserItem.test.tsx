import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserItem from "./UserItem";
import renderer from 'react-test-renderer';

const user = {
  id: 0,
  name: "John",
  username: "JDoe",
  email: "john.doe@gmail.com",
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
};

describe("<UserItem />", () => {
  test("it should mount", () => {
    render(<UserItem user={user} />);
    const userItem = screen.getByTestId("UserItem");
    expect(userItem).toBeInTheDocument();
  });
  test("renders user data", () => {
    render(<UserItem user={user} />);
    const userItemName = screen.getByTestId("UserItem.name");
    expect(userItemName.textContent).toBe(user.name);

    const userItemUsername = screen.getByTestId("UserItem.username");
    expect(userItemUsername.textContent).toBe(`"${user.username}"`);

    const userItemEmail = screen.getByTestId("UserItem.email");
    expect(userItemEmail.textContent).toBe(user.email);

    const userItemWebsite = screen.getByTestId("UserItem.website");
    expect(userItemWebsite.textContent).toBe(user.website);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<UserItem user={user} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
