const BASE_URL = "http://jsonplaceholder.typicode.com";

const USERS = `${BASE_URL}/users`
const USER = (userId: number) => `${BASE_URL}/users/${userId}`

const POSTS = `${BASE_URL}/posts/`

export { USERS, POSTS, USER }