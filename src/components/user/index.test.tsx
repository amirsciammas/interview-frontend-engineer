// import { render, screen } from '@testing-library/react'

import { render, screen } from '@testing-library/react';
import { User } from './index';
import { users } from '../../mock-server/data';
import { BrowserRouter } from 'react-router-dom';

test('user component render', () => {
  render(<User user={users[0]} />, { wrapper: BrowserRouter });
  const heading = screen.getByRole('heading', { name: users[0].name });
  expect(heading).toBeInTheDocument();
});
