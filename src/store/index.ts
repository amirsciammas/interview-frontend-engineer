import {
  makeObservable, observable, action,
} from 'mobx';
import API from '../consts';
import { User, Post } from '../types/api';

class Store {
  constructor() {
    makeObservable(this);
  }

  @observable users: User[] = [];

  @observable posts: Post[] = [];

  @observable user?: User = undefined;

  @action
  async getUsers() {
    try {
      const response = await fetch(`${API}/users`);
      if (response.ok) {
        const data = await response.json();
        this.users = data;
      } else {
        throw new Error('unable to load users');
      }
    } catch (e) {
      console.error(e);
    }
  }

  @action
  async getUserPosts(userId: string) {
    try {
      const response = await fetch(`${API}/users/${userId}/posts`);
      if (response.ok) {
        const data = await response.json();
        this.posts = data;
      } else {
        throw new Error('unable to load posts');
      }
    } catch (e) {
      console.error(e);
    }
  }

  @action
  async getUser(userId: string) {
    try {
      const response = await fetch(`${API}/users/${userId}`);
      if (response.ok) {
        const data = await response.json();
        this.user = data;
      } else {
        throw new Error('unable to load selected user');
      }
    } catch (e) {
      console.error(e);
    }
  }
}

const store = new Store();

export default store;
