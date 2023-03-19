import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHead from './users/tableHead';

test('renders TableHead', () => {
  render(<TableHead />);
  const UserIdLabel = screen.getByText(/User Id/i);
  const NameLabel = screen.getByText(/Name/i);
  const EmailLabel = screen.getByText(/Email/i);
  const WebsiteLabel = screen.getByText(/Website/i);
  expect(UserIdLabel).toBeInTheDocument();
  expect(NameLabel).toBeInTheDocument();
  expect(EmailLabel).toBeInTheDocument();
  expect(WebsiteLabel).toBeInTheDocument();
});
