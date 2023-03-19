import { act, renderHook } from '@testing-library/react';
import { usePosts } from '.';

test('should return user response', async () => {
  const { result } = await act(async () => await renderHook(usePosts));
  expect(result.current.posts?.data).not.toBeFalsy();
});
