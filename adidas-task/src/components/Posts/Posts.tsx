import { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchAllPosts = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );
      const data = await response.data;
      setPosts(data);
    };

    fetchAllPosts();
  }, []);

  return <div>Posts</div>;
};

export default Posts;
