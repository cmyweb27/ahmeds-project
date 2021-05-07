import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import { TiSocialInstagram } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    // marginBottom: theme.spacing(2),
  },
  title_box: {
    display: "flex",
  },
  box: {
    color: "#d6d1d1",
    marginBottom: theme.spacing(2),
  },
  box_icon: {
    paddingLeft: theme.spacing(0),
  },
  title_text: {
    color: "#f7f7f7",
    flexGrow: 1,
  },
  IconButon: {
    paddingTop: theme.spacing(0),
  },
}));

function KeepInTouch() {
  const screenSize = useMediaQuery("(max-width:700px)");
  const [menuDisplay, setMenuDisplay] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {screenSize ? (
        <div>
          {" "}
          <Box className={classes.title_box}>
            <Typography
              variant="subtitle2"
              className={classes.title_text}
              gutterBottom
            >
              KEEP IN TOUCH
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
              <Typography variant="body1">Follow Us</Typography>
              <IconButton className={classes.box_icon}>
                <TiSocialInstagram color="whitesmoke" size="1.4em" />
              </IconButton>
              <IconButton className={classes.box_icon}>
                <FaFacebookSquare color="whitesmoke" size="1.4em" />
              </IconButton>
              <IconButton className={classes.box_icon}>
                {" "}
                <FaYoutubeSquare color="whitesmoke" size="1.4em" />
              </IconButton>

              <IconButton className={classes.box_icon}>
                <FaTwitterSquare color="whitesmoke" size="1.4em" />
              </IconButton>
            </Box>
          )}{" "}
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
            KEEP IN TOUCH
          </Typography>
          <Box className={classes.box}>
            <Typography variant="body1">Follow Us</Typography>
            <IconButton className={classes.box_icon}>
              <TiSocialInstagram color="whitesmoke" size="1.4em" />
            </IconButton>
            <IconButton className={classes.box_icon}>
              <FaFacebookSquare color="whitesmoke" size="1.4em" />
            </IconButton>
            <IconButton className={classes.box_icon}>
              {" "}
              <FaYoutubeSquare color="whitesmoke" size="1.4em" />
            </IconButton>

            <IconButton className={classes.box_icon}>
              <FaTwitterSquare color="whitesmoke" size="1.4em" />
            </IconButton>
          </Box>
        </div>
      )}
    </div>
  );
}

export default KeepInTouch;
