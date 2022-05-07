import React from "react";
import { Post } from "../../types/post";

interface PostListProps {
  posts: Array<Post>;
}

const PostList = ({posts}: PostListProps): React.ReactElement => {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th>User Id</th>
          <th>Title</th>
          <th>Body</th>         
        </tr>
      </thead>
      <tbody className="tbody">
      { posts && 
        posts.map((post) => {
          const { id, userId, title, body} = post;
          return (
            <tr key={id} className="trow">
            <td>{userId}</td>
            <td>{title}</td>
            <td>{body}</td>    
          </tr>
          );
        })
      }
      </tbody>
    </table>
  );
}

export default PostList;
