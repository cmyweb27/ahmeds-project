import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import women from "./women_collection.jpg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { BiShareAlt } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import Badge from "@material-ui/core/Badge";
import { BiPlusCircle } from "react-icons/bi";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    //backgroundColor: "#7b47b2",
  },
  media: {
    paddingTop: "70.25%",
  },
  action_area: {
    padding: theme.spacing(2),
    // backgroundColor: "#f4f2f7",
  },
  price: {
    flexGrow: 1,
  },
  IconButton: {
    padding: "6px",
  },
  card_actions: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  card_content: {
    paddingBottom: theme.spacing(0),
    paddingTop: theme.spacing(1),
  },
}));
function TopSellingItem({ image }) {
  console.log(image, "in topselling item");
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.action_area}>
        <CardMedia image={`${image}`} alt="women" className={classes.media} />
        <CardContent className={classes.card_content}>
          <Typography align="center" variant="subtitle2">
            name of product
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <CardActions className={classes.card_actions}>
        <Typography align="center" color="primary" className={classes.price}>
          &#8358;{"55000"}
        </Typography>{" "}
        <Divider orientation="vertical" flexItem />
        <IconButton className={classes.IconButton}>
          <BiShareAlt />
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <IconButton className={classes.IconButton}>
          <BiHeart />
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <IconButton className={classes.IconButton} color="primary">
          <Badge
            badgeContent={<BiPlusCircle size="1.3em" color="#581c9e" />}
            // color="primary"
            showZero="true"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <HiOutlineShoppingBag />
          </Badge>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default TopSellingItem;
