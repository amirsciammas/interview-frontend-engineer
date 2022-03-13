import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoadingSpinner from './LoadingSpinner';

describe('<LoadingSpinner />', () => {
  test('it should mount', () => {
    render(<LoadingSpinner />);
    
    const loadingSpinner = screen.getByTestId('LoadingSpinner');

    expect(loadingSpinner).toBeInTheDocument();
  });
});