import React, { useState, useEffect } from "react";
import { createClient } from "pexels";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TopSellingItem from "./TopSellingItem";
import { useQueryClient, useQuery } from "react-query";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  subtitle: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  grid_item: {
    padding: "0px",
  },
}));
const client = createClient(
  "563492ad6f91700001000001e408fe7f1aef4d2d9f4b512c4aaf74c0"
);

function TopSelling() {
  const [loclData, setData] = useState({});

  // const queryClient = useQueryClient();

  const darta = async () => {
    // const solid = await axios
    //   .get("https://38vy76feb1.execute-api.eu-central-1.amazonaws.com/lunchbox")
    //   .then((res) => res);
    const query = "shoe";
    const solid = client.photos
      .search({ query, per_page: 10 })
      .then((photos) => {
        return photos;
      });

    return solid;
  };
  const { status, data, error } = useQuery("pics", darta);

  console.log(data, "query.data");

  const classes = useStyles();
  if (status === "loading") {
    return <span>Loading...</span>;
  }
  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className={classes.root}>
      <Typography align="center" variant="h5">
        {" "}
        TOP SELLING
      </Typography>
      <Typography
        align="center"
        variant="subtitle2"
        paragraph="true"
        className={classes.subtitle}
      >
        Cum doctus civibus efficiantur in imperdiet deterruisset
      </Typography>
      <Grid container spacing={1}>
        {data.photos.map((image) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            className={classes.grid_item}
            key={image.id}
          >
            <TopSellingItem image={image.src.medium} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default TopSelling;
