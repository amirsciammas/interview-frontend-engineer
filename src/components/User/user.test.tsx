import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { User } from 'src/types/api';
import UserComponent from './index';

function MockBrowserRouter({ children }: { children: React.ReactChild }) {
  return (
    <MemoryRouter initialEntries={['/']}>
      { children }
    </MemoryRouter>
  );
}

const mockUser: User = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

test('user component renders correctly', () => {
  const component = renderer.create(
    <MockBrowserRouter><UserComponent user={mockUser} /></MockBrowserRouter>,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
