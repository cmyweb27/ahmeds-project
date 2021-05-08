import React from "react";
import cards from "../all_cards.svg";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    // marginBottom: theme.spacing(1),
  },
  cards: {
    // flexGrow: "1",
    paddingBottom: theme.spacing(2),
  },
  box: {
    // display: "flex",
  },
  text: {
    color: "#d6d1d1",
  },
}));
function CopyRight() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      {" "}
      <Grid container className={classes.box}>
        <Grid item xs={12} sm={12} md={6} className={classes.cards}>
          <img src={cards} alt="cards" />
        </Grid>{" "}
        <Grid item xs={12} sm={12} md={6} className={classes.text}>
          <Typography variant="body2" align="right">
            Terms and conditions Privacy © 2020 Allaia
          </Typography>{" "}
        </Grid>
      </Grid>
    </Container>
  );
}

export default CopyRight;
