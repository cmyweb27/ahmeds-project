import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { AiOutlineHome } from "react-icons/ai";
import { ImHeadphones } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import IconButton from "@material-ui/core/IconButton";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";

import Divider from "@material-ui/core/Divider";
import IconButon from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    // marginBottom: theme.spacing(2),
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
  inner_box: {
    display: "flex",
  },
  inner_text: {
    paddingLeft: "8px",
  },
}));

function Contact() {
  const screenSize = useMediaQuery("(max-width:700px)");
  const [menuDisplay, setMenuDisplay] = useState(false);
  const classes = useStyles();
  console.log(screenSize, "screenSize");
  return (
    <div className={classes.root}>
      {screenSize ? (
        <div>
          <Box className={classes.title_box}>
            <Typography
              variant="subtitle2"
              className={classes.title_text}
              gutterBottom
            >
              CONTACTS
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
              <Box className={classes.inner_box}>
                <AiOutlineHome />{" "}
                <Typography
                  variant="body1"
                  className={classes.inner_text}
                  gutterBottom
                >
                  About us
                </Typography>
              </Box>

              <Box className={classes.inner_box}>
                <ImHeadphones />{" "}
                <Typography
                  variant="subtitle1"
                  className={classes.inner_text}
                  gutterBottom
                >
                  +2349093-886885
                </Typography>
              </Box>
              <Box className={classes.inner_box}>
                <FiMail />{" "}
                <Typography variant="body1" className={classes.inner_text}>
                  cmyweb27@yahoo.com
                </Typography>
              </Box>
            </Box>
          )}
          <Divider light />
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
              CONTACT
            </Typography>{" "}
          </Box>
          <Box className={classes.box}>
            <Box className={classes.inner_box}>
              <AiOutlineHome />{" "}
              <Typography
                variant="body1"
                className={classes.inner_text}
                gutterBottom
              >
                About us
              </Typography>
            </Box>

            <Box className={classes.inner_box}>
              <ImHeadphones />{" "}
              <Typography
                variant="body1"
                className={classes.inner_text}
                gutterBottom
              >
                +2349093-886885
              </Typography>
            </Box>
            <Box className={classes.inner_box}>
              <FiMail />{" "}
              <Typography variant="body1" className={classes.inner_text}>
                cmyweb27@yahoo.com
              </Typography>
            </Box>
          </Box>
        </div>
      )}
    </div>
  );
}

export default Contact;
