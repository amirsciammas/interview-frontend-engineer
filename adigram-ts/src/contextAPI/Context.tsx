import { createContext, useEffect, useState, ReactNode } from "react";
import type { IUser, IPost } from "../typings/typings";

export const AdiGramContext = createContext({});

type contextProps = {
  children?: ReactNode;
};

export const Context = ({ children }: contextProps) => {
  const [userLists, setUserLists] = useState<Array<IUser>>([]);
  const [selectedUser, setSelectedUser] = useState<IUser>();
  const [userPosts, setUserPosts] = useState<Array<IPost>>([]);
  const [openModal, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        console.log("user data:", data);
        setUserLists(data);
      });

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => {
        console.log("posts data:", data);
        setUserPosts(data);
      });
  }, []);

  return (
    <AdiGramContext.Provider
      value={{
        userLists,
        setUserLists,
        openModal,
        handleOpen,
        handleClose,
        userPosts,
        setUserPosts,
        selectedUser,
        setSelectedUser,
      }}
    >
      {children}
    </AdiGramContext.Provider>
  );
};
