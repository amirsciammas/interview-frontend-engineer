import {
  makeObservable, observable, action, computed,
} from 'mobx';
import { User, Post } from 'src/types/api';
import { fetchUser, fetchUsers, fetchUserPosts } from 'src/api';
export class Store {
  constructor() {
    makeObservable(this);
  }

  @observable users: User[] = [];

  @observable posts: Post[] = [];

  @observable user?: User = undefined;

  @observable isLoading = false;

  @observable isError = false;

  @computed
  get postsCount() {
    return this.posts.length;
  }

  async getUsers() {
    try {
      this.isLoading = true;
      const users = await fetchUsers();
      this.setUsers(users);
    } catch (e) {
      console.error(e);
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  }

  async getUserPosts(userId: string) {
    try {
      this.isLoading = true;
      const posts = await fetchUserPosts(userId);
      this.setPosts(posts);
    } catch (e) {
      console.error(e);
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  }

  async getUser(userId: string) {
    try {
      this.isLoading = true;
      const user = await fetchUser(userId);
      this.setUser(user);
    } catch (e) {
      console.error(e);
      this.isError = true;
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
  setUser(user?: User) {
    this.user = user;
  }
}

const store = new Store();

export default store;
