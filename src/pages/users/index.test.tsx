import { render, screen } from '@testing-library/react';
import { rest } from 'msw';

import { MemoryRouter } from 'react-router-dom';
import { Users } from '.';
import { USERS } from '../../api/urls';
import { server } from '../../mock-server';

describe('user list', () => {
  test('all users are rendered', async () => {
    render(<Users />, { wrapper: MemoryRouter });
    const users = await screen.findAllByRole('list');
    expect(users).toHaveLength(3);
  });

  test('renders error in case of api failure', async () => {
    server.use(
      rest.get(USERS, (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );

    render(<Users />, { wrapper: MemoryRouter });
    const errorMessage = await screen.findByText('Unable to fetch users');
    expect(errorMessage).toBeInTheDocument();
  });
});
