import axios from 'axios';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export async function getPosts(): Promise<Post[]> {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return response.data;
}

export async function getPostsByUserId(userId: number): Promise<Post[]> {
    const response = await axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return response.data;
}
