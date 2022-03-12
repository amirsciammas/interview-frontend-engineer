import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PostPage from './PostPage';

describe('<PostPage />', () => {
  test('it should mount', () => {
    render(<PostPage />);
    
    const postPage = screen.getByTestId('PostPage');

    expect(postPage).toBeInTheDocument();
  });
});