import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    //marginBottom: theme.spacing(3),
  },
  box: {
    color: "#d6d1d1",
    marginBottom: theme.spacing(2),
  },
  title_text: {
    color: "#f7f7f7",
    flexGrow: 1,
  },
  title_box: {
    display: "flex",
  },
  IconButon: {
    paddingTop: theme.spacing(0),
  },
  mobile_div: {
    borderBottom: "solid 1px #d6d1d1",
  },
}));
function Categories() {
  const screenSize = useMediaQuery("(max-width:700px)");
  const [menuDisplay, setMenuDisplay] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {screenSize ? (
        <div className={classes.mobile_div}>
          {" "}
          <Box className={classes.title_box}>
            <Typography
              variant="subtitle2"
              className={classes.title_text}
              gutterBottom
            >
              CATEGORIES
            </Typography>
            <IconButton
              className={classes.IconButon}
              onClick={() => {
                setMenuDisplay(!menuDisplay);
              }}
            >
              {menuDisplay ? (
                <BiMinus color="#f7f7f7" size=".9em" />
              ) : (
                <AiOutlinePlus color="#f7f7f7" size=".9em" />
              )}
            </IconButton>
          </Box>
          {menuDisplay && (
            <Box className={classes.box}>
              <Typography variant="body1">Electronics</Typography>
              <Typography variant="body1">Furniture</Typography>
              <Typography variant="body1">Watches</Typography>
              <Typography variant="body1">Clothes</Typography>
              <Typography variant="body1">Shoes</Typography>
              <Typography variant="body1">Glasses</Typography>
            </Box>
          )}
          <Divider color="secondary" />
        </div>
      ) : (
        <div>
          {" "}
          <Typography
            variant="subtitle2"
            className={classes.title_text}
            gutterBottom
          >
            {" "}
            CATEGORIES
          </Typography>
          <Box className={classes.box}>
            <Typography variant="body1">Electronics</Typography>
            <Typography variant="body1">Furniture</Typography>
            <Typography variant="body1">Watches</Typography>
            <Typography variant="body1">Clothes</Typography>
            <Typography variant="body1">Shoes</Typography>
            <Typography variant="body1">Glasses</Typography>
          </Box>
        </div>
      )}
    </div>
  );
}

export default Categories;
