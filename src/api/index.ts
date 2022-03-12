import API from 'src/consts';
import { User, Post } from 'src/types/api';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(`${API}/users`);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error('unable to load users');
};

export const fetchUserPosts = async (id: string): Promise<Post[]> => {
  const response = await fetch(`${API}/users/${id}/posts`);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error('unable to load posts');
};

export const fetchUser = async (id: string): Promise<User> => {
  const response = await fetch(`${API}/users/${id}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error('unable to load selected user');
};
