import { cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom/extend-expect';
import { usePosts } from './usePosts';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

jest.mock('../api/posts', () => {
  return {
    getPosts: () => {
      return postListItems;
    }
  }  
});

const postListItems = [ 
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis"
  }
];

describe('Post List', () => {
  afterEach(cleanup);
  afterEach(() => {
    jest.clearAllMocks();
  });

  const getHookWrapper = (): any => {
    const wrapper = ({ children }: any): any => (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );
    const { result, waitForNextUpdate, waitFor } = renderHook(
      () => usePosts(),
      { wrapper }
    );
    return { result, waitForNextUpdate, waitFor };
  };

  it('TC-001: usePosts: Check initial Posts list data state is loading and data is empty', () => {
    const { result } = getHookWrapper();
    // Test the initial state of the request
    expect(result.current.isFetching).toBeTruthy();
    expect(result.current.error).toBe(null);
    expect(result.current.posts).toEqual([]);
  });

  it('TC-002: usePosts: Check API returns an array of Posts', async () => {
    const { result, waitForNextUpdate } = getHookWrapper();
    // Wait for the results
    await waitForNextUpdate();
    // We access the hook result using result.current
    expect(result.current.loading).toBeFalsy();
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.posts).toBeDefined();
    expect(result.current.posts.length).toEqual(2);
  });  

});
