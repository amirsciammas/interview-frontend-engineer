import {
  makeObservable, observable, action, computed,
} from 'mobx';
import API from '../consts';
import { User, Post } from '../types/api';

export class Store {
  constructor() {
    makeObservable(this);
  }

  @observable users: User[] = [];

  @observable posts: Post[] = [];

  @observable user?: User = undefined;

  @observable isLoading = false;

  @computed
  get postsCount() {
    return this.posts.length;
  }

  async getUsers() {
    try {
      this.isLoading = true;
      const response = await fetch(`${API}/users`);
      if (response.ok) {
        const data = await response.json();
        this.setUsers(data);
      } else {
        throw new Error('unable to load users');
      }
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }

  async getUserPosts(userId: string) {
    try {
      this.isLoading = true;
      const response = await fetch(`${API}/users/${userId}/posts`);
      if (response.ok) {
        const data = await response.json();
        this.setPosts(data);
      } else {
        throw new Error('unable to load posts');
      }
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }

  async getUser(userId: string) {
    try {
      this.isLoading = true;
      const response = await fetch(`${API}/users/${userId}`);
      if (response.ok) {
        const data = await response.json();
        this.setUser(data);
      } else {
        throw new Error('unable to load selected user');
      }
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }

  @action
  setPosts(posts: Post[]) {
    this.posts = posts;
  }

  @action
  setUsers(users: User[]) {
    this.users = users;
  }

  @action
  setUser(user: User) {
    this.user = user;
  }
}

const store = new Store();

export default store;
