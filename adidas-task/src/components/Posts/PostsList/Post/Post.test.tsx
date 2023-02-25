import { render, screen } from '@testing-library/react';

import { PostsList } from '../PostsList';

describe('Renders a list of users', () => {
  test('renders correctly', async () => {
    render(<PostsList />);
    const posts = await screen.findAllByRole('listitem');
    expect(posts).toHaveLength(3);
  });
});
