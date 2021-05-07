import React from "react";
import logo from "./logo_white.svg";
import "./App.css";
import Typography from "@material-ui/core/Typography";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { HiOutlineChevronDown } from "react-icons/hi";
import IconButton from "@material-ui/core/IconButton";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  appbar: {
    color: "#f7f7f7",
    // backgroundColor: "#f7f7f7",
  },
  container: {
    padding: theme.spacing(0),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  icons: {},
  title: {
    flexGrow: 1,
    // color: "#f7f7f7",
  },
  box_links: {
    display: "flex",
    color: "#f7f7f7",
  },
  box_typography: {
    marginLeft: theme.spacing(4),
    color: "#f7f7f7",
  },
  right_edge: {
    display: "flex",
    flexDirection: "column",
  },
}));
function NavBar() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:700px)");

  return (
    <div className={classes.root}>
      {matches ? (
        <AppBar position="static" className={classes.appbar}>
          <Container>
            <Toolbar>
              <Box className={classes.title}>
                <img src={logo} alt="logo" />
              </Box>
              <Box
                className={`${classes.box_links} ${classes.title}`}
                textAlign="center"
              >
                <Typography
                  className={classes.box_typography}
                  variant="subtitle1"
                >
                  HOME
                  <HiOutlineChevronDown size="1.1em" color="#f7f7f7" />
                </Typography>
                <Typography
                  className={classes.box_typography}
                  variant="subtitle1"
                >
                  PAGES
                  <HiOutlineChevronDown size="1.1em" color="#f7f7f7" />
                </Typography>{" "}
                <Typography
                  className={classes.box_typography}
                  variant="subtitle1"
                  align="center"
                >
                  EXTRA PAGES
                  <HiOutlineChevronDown size="1.1em" color="#f7f7f7" />
                </Typography>
                <Typography
                  className={classes.box_typography}
                  variant="subtitle1"
                >
                  BLOG
                </Typography>
                <Typography
                  className={classes.box_typography}
                  variant="subtitle1"
                >
                  CART
                </Typography>
              </Box>
              <Box className={classes.right_edge}>
                <Typography>Need Help?</Typography>
                <Typography variant="caption">0803-3535-184</Typography>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      ) : (
        <AppBar position="static" className={classes.appbar}>
          {" "}
          <Container maxWidth="md" className={classes.container}>
            <Toolbar>
              <IconButton
                edge="start"
                // className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <GiHamburgerMenu size="1.1em" />
              </IconButton>
              <Box className={classes.title} textAlign="center">
                <img src={logo} alt="logo" />
              </Box>
              <IconButton
                // edge="end"
                className={classes.icons}
                color="inherit"
                aria-label="menu"
              >
                <FaUserCircle size="1.1em" />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </div>
  );
}

export default NavBar;
