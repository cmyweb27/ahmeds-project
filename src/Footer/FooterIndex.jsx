import React from "react";
import { makeStyles } from "@material-ui/core";
import QuickLinks from "./QuickLinks";
import Grid from "@material-ui/core/Grid";

import Categories from "./Categories";
import Contact from "./Contact";
import KeepInTouch from "./KeepInTouch";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
  },
}));
function FooterIndex() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={12} md={3}>
          <QuickLinks />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Categories />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Contact />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <KeepInTouch />
        </Grid>
      </Grid>
    </div>
  );
}

export default FooterIndex;
