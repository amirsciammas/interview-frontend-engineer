import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UsersPage from './UsersPage';

describe('<UsersPage />', () => {
  test('it should mount', () => {
    render(<UsersPage />);
    
    const usersPage = screen.getByTestId('UsersPage');

    expect(usersPage).toBeInTheDocument();
  });
});