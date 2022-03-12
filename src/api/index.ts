import API from 'src/consts';
import { User, Post } from 'src/types/api';

const createApiRequest = async (url: string, errorMsg: string) => {
  const response = await fetch(`${API}/${url}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error(errorMsg);
};

export const fetchUsers = async (): Promise<User[]> => createApiRequest('users', 'Unable to load users');

export const fetchUserPosts = async (id: string): Promise<Post[]> => createApiRequest(`users/${id}/posts`, 'Unable to load posts');

export const fetchUser = async (id: string): Promise<User> => createApiRequest(`users/${id}`, 'Unable to load selected user');
