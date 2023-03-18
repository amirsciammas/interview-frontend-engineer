import { Button } from '.';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('clicking button is working', async () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Test Button</Button>);
  await userEvent.click(screen.getByRole('button', { name: 'Test Button' }));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
