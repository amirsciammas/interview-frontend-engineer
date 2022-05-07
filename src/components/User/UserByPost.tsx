import React, { useEffect, useState } from 'react';
import { usePosts } from '../../hooks/usePosts';
import { useUser } from '../../hooks/useUsers';
import { useParams } from 'react-router-dom';
import { Post } from '../../types/post';

const UserByPost = (): React.ReactElement => {
  const { id } = useParams<{ id: string }>();

  const userId = Number(id);
  const [userByPosts, setUserByPosts] = useState<Array<Post>>();
  const {
    user,
    isFetching: isFetchingUserByPost,
    isSuccess: isUserSuccess
  } = useUser(userId);

  const { posts } = usePosts();

  useEffect(() => {
    if(isUserSuccess && posts.length !== 0) {
      const filteredPost = posts.filter((post) => post.userId === userId)
      setUserByPosts(filteredPost);
    }
  }, [posts, isUserSuccess, userId]);

  if(isFetchingUserByPost) {
    return (      
      <h1>Fetching the User By Post Details</h1>      
    );
  } else if(userByPosts?.length === 0) {
    return ( 
      <h1>No Results found</h1>
    )
  } else {
    return (
      <div className='user-detail-block'>
        <div>                 
          <h2>Name: {user?.name}</h2>
          <h3>User name: {user?.username}</h3>
          <p>Email: {user?.email}</p>
          <p>Phone: {user?.phone}</p>
          <p>Website: {user?.website}</p>
          <p>Address: 
            <span> {user?.address?.street},</span>
            <span> {user?.address?.city},</span>
            <span> {user?.address?.zipcode}</span>
          </p>
          <p>Company: {user?.company.name}</p>             
        </div>
        <div>         
          <h1>Posts</h1>
          {
            userByPosts && userByPosts.map((userByPost) => {
              const { id, title, body} = userByPost;
              return (                        
                <div className="post" key={id}>               
                  <h2>{title}</h2>
                  <p>{body}</p>                              
                </div>               
            )})
          }
        </div>
      </div>
    )
  }
}

export default UserByPost;