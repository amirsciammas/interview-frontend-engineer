import React, { useState, useEffect } from 'react';
import { usePosts } from '../../hooks/usePosts';
import { Post } from '../../types/post';
import PostList from './PostList';

const Posts = (): React.ReactElement => {
  const {
    posts,
    isFetching: isFetchingPosts,
    error,
  } = usePosts();

  const [postTitle, setPostTitle] = useState('');
  const [filteredPost, setFilteredPost] = useState<Array<Post>>([]);
  useEffect(() => {
    if (postTitle === "") {
      setFilteredPost(posts);
    } else {     
      setFilteredPost(posts.filter((post) => post.title.toLowerCase().includes(postTitle.toLowerCase())));
    }
  },[posts, postTitle]);
  if(isFetchingPosts) {
    return (      
      <h1>Fetching the Post details</h1>      
    );
  } else if(error || posts?.length === 0) {
    return ( 
      <h1>No Results found</h1>
    )
  } else {
    return (
      <div className='TableContainer'>
        <div className='Search'>
          <h2>Search By Post Title: </h2>
          <input
            type="text"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            placeholder="Enter the Post Title"
          />
        </div>
        <PostList posts={filteredPost}></PostList>
      </div>
    )
  }
}

export default Posts;