import { User } from "../interfaces/UserType";

const getUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

const getUser = async (userId: number): Promise<User> => {
  const users = await getUsers();
  const user = users.find((user) => user.id === userId);
  if (!user) {
    throw new Error(`User not found for id: ${userId}`);
  }
  return user;
};

const UsersService = {
  getUsers,
  getUser,
};

export default UsersService;
