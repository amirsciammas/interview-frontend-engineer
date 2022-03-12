import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FunctionComponent } from "react";
import { Post } from "../../utils/api.types";

interface PostProps {
  post: Post;
}

const PostCard: FunctionComponent<PostProps> = ({post}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body2">
        {post.body}
      </Typography>
    </CardContent>
  </Card>
  );
};

export default PostCard;
