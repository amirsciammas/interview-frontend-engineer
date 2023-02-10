import { render, screen, waitFor,fireEvent } from '@testing-library/react';
import App from './App';

test('users and posts', async () => {

  const userApiUrl = 'http://jsonplaceholder.typicode.com/users';
  const mockedUsers = [{name:'Shuchi',email:'shuchitayal02@gmail.com',phone:'9999999999',id:1}];
  const mockedPosts = [{userId:1,id:1,title:'Title1',body:'Dummy Text1'},{userId:1,id:2,title:'Title2',body:'Dummy Text2'}];

  jest.spyOn(global, 'fetch').mockImplementation((url) => Promise.resolve({
    json: jest.fn().mockResolvedValue(url === userApiUrl ? mockedUsers : mockedPosts)
  }))

  render(<App />);
  const usersList = await waitFor(() => screen.findAllByTestId("user"));
  expect(usersList).toHaveLength(1);
  fireEvent.click(usersList[0]);
  const postsData = await waitFor(() => screen.findAllByTestId("post"));
  expect(postsData).toHaveLength(2);

});
