import axios from 'axios';
import { User } from '../types/user';
import to from '../utils/to';
import { PRODUCTION_URL } from './constants';

/**
 * Fetches the User List data from JSONPlaceholder public API.
 */
 export const getUsers = async (): Promise<Array<User>> => {
  const [error, response] = await to(
    axios.get(`${PRODUCTION_URL}/users`)
  );
  if (error) {
    throw new Error(error);
  }

  return response.data;
};

/**
 * Fetches the User data by Id from JSONPlaceholder public API.
 */
 export const getUserById = async (userId: number): Promise<User> => {
  const [error, response] = await to(
    axios.get(`${PRODUCTION_URL}/users/${userId}`)
  );
  if (error) {
    throw new Error(error);
  }

  return response.data;
};