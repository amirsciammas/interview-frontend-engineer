import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PostPage from './PostPage';

const userId = 5;

jest.mock("react-router-dom", () => {
	return {
		useParams: () => ({ id: userId }),
		useNavigate: () => null
	}
});

describe('<PostPage />', () => {
  test('it should mount', () => {
    render(<PostPage />);
    
    const postPage = screen.getByTestId('PostPage');

    expect(postPage).toBeInTheDocument();
  });
});