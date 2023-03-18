import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Users } from '.';

describe('user list', () => {
  test('all users are rendered', async () => {
    render(<Users />, { wrapper: BrowserRouter });
    const users = await screen.findAllByRole('list');
    expect(users.length).toBe(3);
  });
});
