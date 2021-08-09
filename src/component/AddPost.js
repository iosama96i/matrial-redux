import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "../store/postSlice";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: "0 auto",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    marginTop: "50px",
    padding: "0 auto",
  },
});
export default function AddPost() {
  const classes = useStyles();
  const [title, setTitle] = React.useState("");
  const [discription, setDiscription] = React.useState("");
  const dispatch = useDispatch();
  const article = useSelector((state) => state.post);

  const handlePost = () => {
    if (title && discription) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          discription,
        })
      );
    }
  };
  console.log(article);
  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardContent>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
          />
          <br></br>
          <br></br>
          <TextField
            id="outlined-multiline-static"
            label="discription"
            multiline
            rows={4}
            variant="outlined"
            value={discription}
            onChange={(e) => setDiscription(e.target.value)}
          />
          <br></br>
          <br></br>
          <Button variant="contained" onClick={() => handlePost}>
            post
          </Button>
          <br />
        </CardContent>
      </Card>
    </div>
  );
}
