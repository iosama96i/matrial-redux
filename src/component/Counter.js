import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../store/counterSlice";
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
export default function Counter() {
  const classes = useStyles();
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5">{count}</Typography>
          <br />
          <Button
            style={{ margin: "5px" }}
            onClick={() => {
              dispatch(increment());
            }}
            variant="contained"
            color="primary"
          >
            {" "}
            increase{" "}
          </Button>
          <Button
            onClick={() => dispatch(reset())}
            style={{ margin: "5px" }}
            variant="contained"
            color="secondary"
          >
            {" "}
            reset{" "}
          </Button>
          <Button
            onClick={() => dispatch(decrement())}
            style={{ margin: "5px" }}
            variant="contained"
          >
            {" "}
            Decrease{" "}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
