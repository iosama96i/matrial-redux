import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, clear, RemoveItem } from "../store/productSlice";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    margin: "6px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Product() {
  const items = useSelector((state) => state.products.items);
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {items.map((item) => {
          const { title, id, price, dis, img } = item;
          return (
            <Grid key={id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={img}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    color="secondary"
                    component="h4"
                  >
                    ${price}
                  </Typography>
                  <Typography>{dis}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => dispatch(addToCart({ payload: id }))}
                    vairant="conteined"
                    color="primary"
                  >
                    Add to cart
                  </Button>
                  <Button osize="small" color="secondary">
                    remove
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <br />
      <br />
      <Button onClick={() => dispatch(clear())} size="small">
        Clear All{" "}
      </Button>
    </Container>
  );
}
