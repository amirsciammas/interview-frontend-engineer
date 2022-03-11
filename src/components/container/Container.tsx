import { FunctionComponent, useEffect, useState } from "react";
import { getPosts, getUsers } from "../../utils/api";
import { Post, User } from "../../utils/api.types";

const Container: FunctionComponent = () => {
  const [users, setusers] = useState([] as User[])
  const [posts, setposts] = useState([] as Post[])

  useEffect(() => {
    getUsers().then(users => setusers(users as User[]));
    getPosts().then(posts => setposts(posts as Post[]));
  }, []);
  
  const renderTitles = (titles: User[] | Post[]) => {
    return titles.map(title => {
      return <p id={''+title.id}>{title.id}</p>
    })
  }

  return <section>
    {users && renderTitles(users)}
    {posts && renderTitles(posts)}
  </section>
};

export default Container;
