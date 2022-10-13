import "./userCard.css";
export const UserCard = (props: { user: IUsers; getUserPosts: Function }) => {
  const { user, getUserPosts } = props;
  return (
    <div className="User-Card-Container" onClick={() => getUserPosts(user)}>
      <div className="User-Card-Contents">
        <div className="User-Info">
          <div className="User-Name">{user.name}</div>
          <div className="User-Item">{user.phone}</div>
        </div>
        <div className="User-Item">{user.email}</div>
        <div className="User-Item">{user.website}</div>
        <div className="User-Item">
          {user.address?.street}, {user.address?.suite}, {user.address?.city},{" "}
          {user.address?.zipcode}
        </div>
      </div>
    </div>
  );
};
