import { FunctionComponent, useEffect, useState } from "react";
import { SelectChangeEvent } from '@mui/material/Select';
import { getUsers, getPostsByUserId } from "../../utils/api";
import { User, Post } from "../../utils/api.types";
import Users from "../users";
import PostCard from "../postCard";

const Container: FunctionComponent = () => {
  const [users, setusers] = useState([] as User[]);
  const [selectedUser, setselectedUser] = useState('');
  const [userPosts, setUserPosts] = useState([] as Post[])

  useEffect(() => {
    getUsers().then(users => setusers(users as User[])).catch(() => setusers([] as User[]));
  }, []);

  useEffect(() => {
    getPostsByUserId(selectedUser).then(posts => setUserPosts(posts as Post[]))
  }, [selectedUser])

  const onSelectUser = (event: SelectChangeEvent<string>) => {
    setselectedUser(event.target.value as string);
  };

  const userPostsItems = userPosts.length ? userPosts.map((post => {
      return <PostCard key={post.id} post={post}/>
    })) : <p>No Posts</p>
  

  if(users.length){
    return (
      <>
        <Users users={users} selectedUserId={selectedUser} onSelectUser={onSelectUser}/>
        { userPostsItems}
      </>
    )}
  return <p>No users</p>;
};

export default Container;
