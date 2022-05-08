import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import User from '.';
import { UserProvider } from '../UserContext';

jest.mock('../../hooks/useUsers', () => {
  return {
    useUsers: () => {
      return {
        users: userListItems,
        isFetching: false,
        error: null,
        isSuccess: true
      }
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

const getUserListWrapper = (): any => {
  const { container, getByText, getByTestId } = render(<UserProvider><User /></UserProvider>);
  return { container, getByText, getByTestId };
};

describe('Target User List Component', () => {
  afterEach(cleanup);
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('TC-001: Renders User component correctly', () => {
    const { container } = getUserListWrapper();
    expect(container).not.toBe(null);
  });

  it('TC:002: Renders correctly User name search container', () => {
    const { getByText } = getUserListWrapper();
    const title = getByText('Search By User Name:');
    expect(title).not.toBe(null);
  }); 

  it('TC:003: Renders correctly Table Header', () => {
    const { getByText } = getUserListWrapper();
    const name = getByText('Name');
    expect(name).not.toBe(null);
    const userName = getByText('User Name');
    expect(userName).not.toBe(null);
    const email = getByText('Email');
    expect(email).not.toBe(null);
  });

  it('TC:004: Renders correctly User name search', () => {
    const { getByTestId } = getUserListWrapper();
    const userNameSearch = getByTestId('user-name');
    expect(userNameSearch).not.toBe(null);
  });

  it('TC:005: Renders the User Table data correctly', () => {
    const { queryAllByRole } = render(<UserProvider><User /></UserProvider>); 
    expect(queryAllByRole('tabel-row')).toHaveLength(2);
  });

  it('TC:006: Test Input search', () => { 
    const { queryByPlaceholderText, queryAllByRole } = render(<UserProvider><User /></UserProvider>); 
    const inputElement = queryByPlaceholderText('Enter the User name') as HTMLInputElement;    
    fireEvent.change(inputElement, { target: { value: 'Antonette' } });
    expect((inputElement).value).toBe('Antonette');
    expect(queryAllByRole('tabel-row')).toHaveLength(1);
  });

});
