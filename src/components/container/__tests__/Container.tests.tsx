import { screen, render, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Container from '../Container';
import { BASE_URL, UserPostsEndpoints } from '../../../utils/api';

const usersResponse = rest.get(`${BASE_URL + UserPostsEndpoints.USERS}`, (req, res, ctx) => {
  return res(
    ctx.json([{id: 1, name: 'mock name'}])
  );
});

const postResponse = rest.get(`${BASE_URL + UserPostsEndpoints.POSTS}`, (req, res, ctx) => {
  return res(
    ctx.json([{id: 1, userId: 1, body: 'mock body', title: 'mock title'}])
  );
});

const usersErrorResponse = rest.get(`${BASE_URL + UserPostsEndpoints.USERS}`, (req, res, ctx) => {
  return res(
    ctx.status(500)
  );
});

const handlers = [usersResponse, postResponse]

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('it should display dropdown users', async() => {
  render(<Container/>);
  const dropdown = await screen.findByLabelText('User');
  expect(dropdown).toBeTruthy();
});

test('it should display post body', async() => {
  render(<Container/>);
  const postBody = await screen.findByText('mock body');
  await waitFor(() => {
    expect(postBody).toBeTruthy();
  })
});

test('it should display no users message when error on request', async() => {
  server.use(usersErrorResponse);
  render(<Container/>);
  const noUsers = await screen.findByText('No users');
  await waitFor(() => {
    expect(noUsers).toBeTruthy();
  })
});

