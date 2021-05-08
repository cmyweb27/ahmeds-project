import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    // marginBottom: theme.spacing(1),
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

function QuickLinks() {
  const screenSize = useMediaQuery("(max-width:700px)");
  const [menuDisplay, setMenuDisplay] = useState(false);
  const classes = useStyles();
  console.log(screenSize, "screenSize");
  return (
    <div className={classes.root}>
      {screenSize ? (
        <div className={classes.mobile_div}>
          <Box className={classes.title_box}>
            <Typography
              variant="subtitle2"
              className={classes.title_text}
              gutterBottom
            >
              QUICK LINKS
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
              <Typography variant="body1">About us</Typography>
              <Typography variant="body1">Faq</Typography>
              <Typography variant="body1">Help</Typography>
              <Typography variant="body1">My account</Typography>
              <Typography variant="body1">Contact</Typography>
              <Typography variant="body1">Blog</Typography>
            </Box>
          )}
        </div>
      ) : (
        <div>
          {" "}
          <Box className={classes.title_box}>
            <Typography
              variant="subtitle2"
              className={classes.title_text}
              gutterBottom
            >
              QUICK LINKS
            </Typography>{" "}
          </Box>
          <Box className={classes.box}>
            <Typography variant="body1">About us</Typography>
            <Typography variant="body1">Faq</Typography>
            <Typography variant="body1">Help</Typography>
            <Typography variant="body1">My account</Typography>
            <Typography variant="body1">Contact</Typography>
            <Typography variant="body1">Blog</Typography>
          </Box>
        </div>
      )}
    </div>
  );
}

export default QuickLinks;
