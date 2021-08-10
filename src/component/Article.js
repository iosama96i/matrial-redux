import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import { useSelector } from "react-redux";
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

export default function Article() {
  const news = useSelector((state) => state.post);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5">{news.title} </Typography>
          <br />
          <p>{news.discription}</p>
        </CardContent>
      </Card>
    </div>
  );
}
