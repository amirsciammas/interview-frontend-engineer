import React, { useState, useEffect, useContext } from 'react';
import { usePosts } from '../../hooks/usePosts';
import { Post } from '../../types/post';
import UserContext from '../UserContext';
import PostList from './PostList';

const Posts = (): React.ReactElement => {
  const {
    posts,
    isFetching: isFetchingPosts,
    error,
  } = usePosts();

  // Get the Users from Context API
  const { users } = useContext(UserContext);

  const [postTitle, setPostTitle] = useState('');
  const [filteredPost, setFilteredPost] = useState<Array<Post>>([]);
  const [userName, setUserName] = useState('');

  // Search Post by Post title
  useEffect(() => {
    if (posts.length > 0) {
      if (postTitle === "" && userName === "") {
        setFilteredPost(posts);
      } else {     
        if(userName === "") {
          setFilteredPost(posts.filter((post) => post.title.toLowerCase().includes(postTitle.toLowerCase())));
        } else {
          const user = users.find((user) => user.username.toLowerCase().includes(userName.toLowerCase()));
          setFilteredPost(posts.filter((post) => {
            if((post.userId === user?.id) && post.title.toLowerCase().includes(postTitle.toLowerCase())) {
              return post;
            } else {
              return null;
            }
          }));
        }        
      }
    }   
  },[postTitle, posts, userName, users]);
  
  // Search Post By User name
  useEffect(() => {
    // Clear the Post title search vale on every search of user name
    setPostTitle("");
    if (posts.length > 0) {
      if(userName === "") {
        setFilteredPost(posts);
      } else {     
        const user = users.find((user) => user.username.toLowerCase().includes(userName.toLowerCase()));
        setFilteredPost(posts.filter((post) => post.userId === user?.id));
      }
    }
  }, [userName, posts, users]);

  if(isFetchingPosts) {
    return (      
      <h1>Fetching the Post details</h1>      
    );
  } else {
    return (
      <div className='TableContainer'>
        <div className='Search'>
          <h2>Search Post By User name: </h2>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter the User name"
          />
        </div>

        <div className='Search'>
          <h2>Search By Post Title: </h2>
          <input
            type="text" 
            value={postTitle}       
            onChange={(e) => setPostTitle(e.target.value)}
            placeholder="Enter the Post Title"
          />
        </div>
        {
          (error || filteredPost?.length === 0 ) ? 
          (
            <h1>No Results found</h1>
          ) :
          (
            <PostList posts={filteredPost}></PostList>
          )
        }        
      </div>
    )
  }
}

export default Posts;