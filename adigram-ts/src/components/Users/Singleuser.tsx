import React, { useContext } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import "./users.css";
import { AdiGramContext } from "../../contextAPI/Context";
import type { IUser } from "../../typings/typings";

type SingleUserProps = {
  userData: IUser;
};

const SingleUser = ({ userData }: SingleUserProps) => {
  const { handleOpen, setSelectedUser } = useContext<any>(AdiGramContext);
  function stringToColor(string: string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }
  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <Card variant="outlined" className="single-user">
      <CardContent>
        <Avatar {...stringAvatar(userData.name)}></Avatar>
        <Typography variant="h5" color="text.primary">
          {userData.name}
        </Typography>
        <Typography color="text.secondary">{userData.email}</Typography>
        <Typography color="text.secondary">{userData.phone}</Typography>
        <div style={{ marginTop: "10px" }}>
          <Typography
            variant="body1"
            style={{
              display: "flex !important",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "10px !important",
            }}
          >
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <b>City: </b>
              {userData.address.city}
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <b> Company:</b> {userData.company.name}
            </Box>
          </Typography>
        </div>
        <Button
          size="medium"
          onClick={() => {
            handleOpen();
            setSelectedUser(userData);
          }}
          data-testid="check-out-post"
        >
          Check out posts
        </Button>
      </CardContent>
    </Card>
  );
};

export default SingleUser;
