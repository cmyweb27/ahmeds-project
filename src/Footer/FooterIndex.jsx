import React from "react";
import { makeStyles } from "@material-ui/core";
import QuickLinks from "./QuickLinks";
import Grid from "@material-ui/core/Grid";

import Categories from "./Categories";
import Contact from "./Contact";
import KeepInTouch from "./KeepInTouch";
import CopyRight from "./CopyRight";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
  },
  copy_right: {
    paddingTop: theme.spacing(4),
  },
  // grid: {
  //   borderBottom: "solid 1px #f7f7f7",
  // },
}));
function FooterIndex() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.grid}>
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

      <div className={classes.copy_right}>
        <CopyRight />
      </div>
    </div>
  );
}

export default FooterIndex;
