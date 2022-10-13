import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserCard } from "../../components/userCard";
import { PostCard } from "../../components/postCard";
import "./homePage.css";
import { Header } from "../../components/header";
import { getUsers, getPosts } from "../../store/actionCreators";
import { useSelector } from "react-redux";
import { useTypedDispatch } from "../../store";
import ClearIcon from "../../assets/clear-icon.png";

export const HomePage = () => {
  const [activeUserId, setActiveUserId] = useState<number>();
  const [userPosts, setUserPosts] = useState<any[]>([]);
  const [searchText, setSearchText] = useState<string>();
  const { users, posts } = useSelector((state: AppState) => state);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  let listUsers = users;
  let listUserPosts = userPosts;
  if (id) {
    listUserPosts = !searchText
      ? userPosts
      : userPosts.filter((user) => !user.title.search(searchText));
  } else {
    listUsers = !searchText
      ? users
      : users.filter((user) => !user.name.search(searchText));
  }

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPosts());
  }, []);

  const goBack = () => {
    setActiveUserId(0);
    setUserPosts([]);
    setSearchText("");
    navigate(-1);
  };

  const navigateToUserPost = (user: IUsers) => {
    const { id } = user;
    setActiveUserId(id);
    const userPosts: IPosts[] = posts.filter(
      (post: { userId: number }) => post.userId === user.id
    );
    setUserPosts(userPosts);
    setSearchText("");
    navigate(`/:${id}`);
  };

  const renderUsers = (users: IUsers[]) => {
    return users.map((user) => {
      return (
        <UserCard key={user.id} user={user} getUserPosts={navigateToUserPost} />
      );
    });
  };

  const renderUserPosts = () => {
    return listUserPosts.map((post) => {
      return <PostCard key={post.id} post={post} />;
    });
  };

  return (
    <div className="Home-Page-Container">
      <Header isBackEnabled={!!activeUserId} onGoBack={goBack} />
      <div className="Search-Bar">
        <input
          type="text"
          value={searchText ?? ""}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          className="Search-Text"
        />
        <img
          src={ClearIcon}
          alt="Clear"
          className="Clear-Icon"
          onClick={() => setSearchText("")}
        />
      </div>

      <div className="Home-Page-Contents">
        <div className="Home-Page-Users">
          {!id ? renderUsers(listUsers) : renderUserPosts()}
        </div>
      </div>
    </div>
  );
};
