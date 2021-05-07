import React from "react";
import Grid from "@material-ui/core/Grid";
import womens from "./womens_collection.jpg";
import women from "./women_collection.jpg";
import men from "./new_men.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  women: {
    backgroundImage: `url(${women})`,
  },
  media: {
    position: "relative",
    height: 0,
    paddingTop: "80.25%", // 16:9
  },
  text_overlay: {
    position: "absolute",
    color: "#f7f7f7",
    bottom: "60px",
    left: "55px",
  },
  button_overlay: {
    position: "absolute",

    bottom: "20px",
    left: "115px",
  },
  grid_item: {
    padding: theme.spacing(0),
  },
}));

function Collections() {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={4}>
        <CardMedia image={womens} className={classes.media}>
          {" "}
          <Typography variant="h5" className={classes.text_overlay}>
            WOMEN'S COLLECTION
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button_overlay}
          >
            shop now
          </Button>
        </CardMedia>{" "}
      </Grid>{" "}
      <Grid item xs={12} sm={12} md={4}>
        <CardMedia image={men} className={classes.media}>
          {" "}
          <Typography variant="h5" className={classes.text_overlay}>
            MEN'S COLLECTION
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button_overlay}
          >
            shop now
          </Button>
        </CardMedia>{" "}
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <CardMedia image={women} className={classes.media}>
          {" "}
          <Typography variant="h5" className={classes.text_overlay}>
            KIDS COLLECTION
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button_overlay}
          >
            shop now
          </Button>
        </CardMedia>{" "}
      </Grid>
    </Grid>
  );
}

export default Collections;
