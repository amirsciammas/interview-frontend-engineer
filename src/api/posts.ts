import axios from 'axios';
import { Post } from '../types/post';
import to from '../utils/to';
import { PRODUCTION_URL } from './constants';

/**
 * Fetches the Post List data from JSONPlaceholder public API.
 */
 export const getPosts = async (): Promise<Array<Post>> => {
  const [error, response] = await to(
    axios.get(`${PRODUCTION_URL}/posts`)
  );
  if (error) {
    throw new Error(error);
  }
  return response.data;
};