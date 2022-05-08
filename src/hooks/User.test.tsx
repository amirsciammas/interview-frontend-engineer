import { cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom/extend-expect';
import { useUsers } from './useUsers';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

jest.mock('../api/users', () => {
  return {
    getUsers: () => {
      return userListItems;
    }
  }  
});

const userListItems = [ 
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",     
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org"   
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",     
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",   
  },
];

describe('User List', () => {
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
      () => useUsers(),
      { wrapper }
    );
    return { result, waitForNextUpdate, waitFor };
  };

  it('TC-001: useUsers: Check initial Users list data state is loading and data is empty', () => {
    const { result } = getHookWrapper();
    // Test the initial state of the request
    expect(result.current.isFetching).toBeTruthy();
    expect(result.current.error).toBe(null);
    expect(result.current.users).toEqual([]);
  });

  it('TC-002: useUsers: Check API returns an array of Users', async () => {
    const { result, waitForNextUpdate } = getHookWrapper();
    // Wait for the results
    await waitForNextUpdate();
    // We access the hook result using result.current
    expect(result.current.loading).toBeFalsy();
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.users).toBeDefined();
    expect(result.current.users.length).toEqual(2);
  });  

});
