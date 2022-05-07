import React from 'react';
import { getPosts } from '../../api/posts';

const Posts = (): React.ReactElement => { 
  const postData = getPosts();
  console.log('postData', postData);
  return ( 
    <h1>No Results found</h1>
  )
}

export default Posts;