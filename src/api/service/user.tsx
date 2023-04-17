import axios from 'axios';

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export async function getUsers(): Promise<User[]> {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
}

export async function getUserById(userId: number): Promise<User> {
    const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data;
}
