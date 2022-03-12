import { User } from "../interfaces/UserType";

const UsersService = {
  getUsers: async (): Promise<User[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  },
};

export default UsersService;
