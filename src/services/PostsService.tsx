import { Post } from "../interfaces/PostType";

const UsersService = {
  getAllPosts: async (): Promise<Post[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
	},
	
	getPostsOfUser: async (userId: number): Promise<Post[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
		const posts = await response.json();
		return posts.filter((post: Post) => {
			return post.userId === userId
		})
  },
};

export default UsersService;