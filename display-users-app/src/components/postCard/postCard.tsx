import "./postCard.css";
export const PostCard = (props: { post: IPosts }) => {
  const { post } = props;
  return (
    <div className="Post-Card-Container">
      <div className="Post-Card-Contents">
        <div className="Post-Name">{post.title}</div>
        <div className="Post-Item">{post.body}</div>
      </div>
    </div>
  );
};
