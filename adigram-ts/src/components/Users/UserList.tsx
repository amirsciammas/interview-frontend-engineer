import React, { useContext } from "react";
import { AdiGramContext } from "../../contextAPI/Context";
import PostModal from "../Posts/PostModal";
import SingleUser from "./Singleuser";
import "./users.css";
import type { IUser } from "../../typings/typings";

const UserList = () => {
  const { userLists, openModal, handleClose } = useContext<any>(AdiGramContext);
  console.log("userLists:", userLists);
  return (
    <>
      <div className="users-container">
        {userLists?.map((user: IUser) => (
          <SingleUser userData={user} />
        ))}
      </div>
      {openModal && <PostModal open={openModal} handleClose={handleClose} />}
    </>
  );
};

export default UserList;
