import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { AdiGramContext } from "../../contextAPI/Context";
import "./post.css";
import type { IPost } from "../../typings/typings";
import { Container } from "@mui/system";

type PostModalProps = {
  open: boolean;
  handleClose: () => boolean;
};

const PostModal = ({ open, handleClose }: PostModalProps) => {
  const [indvPost, setIndvPost] = useState([]);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid white",
    boxShadow: 24,
    p: 4,
    color: "white",
  };
  const { userPosts, selectedUser } = useContext<any>(AdiGramContext);

  useEffect(() => {
    const data = userPosts?.filter(
      (posts: IPost) => posts.userId === selectedUser?.id
    );
    console.log("indev data:", data, selectedUser, userPosts);
    setIndvPost(data);
  }, [selectedUser, userPosts]);

  return (
    <Modal
      open={open}
      onClose={(e) => {
        handleClose();
      }}
      className="post-modal"
      sx={style}
    >
      <Container className="outer-container">
        <div className="modal-header">
          <div className="modal-left">Posts of {selectedUser?.name}</div>
          <HighlightOffIcon onClick={handleClose} className="close-icon" />
        </div>
        {indvPost?.map((post: IPost) => (
          <Container className="inner-container">
            <Box className="user-posts-box">
              <Typography id="modal-modal-title" variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {post.body}
              </Typography>
            </Box>
          </Container>
        ))}
      </Container>
    </Modal>
  );
};

export default PostModal;
