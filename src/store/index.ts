import {
  makeObservable, observable, action,
} from 'mobx';
import API from '../consts';
import { User } from '../types/api';

class Store {
  constructor() {
    makeObservable(this);
  }

  @observable users: User[] = [];

  @action
  async getUsers() {
    try {
      const response = await fetch(`${API}/users`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.users = data;
      } else {
        throw new Error('unable to load data');
      }
    } catch (e) {
      console.error(e);
    }
  }
}
const store = new Store();

export default store;
