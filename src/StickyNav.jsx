import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import IconButton from "@material-ui/core/IconButton";
import { AiTwotonePhone } from "react-icons/ai";
import { GrMenu } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import Badge from "@material-ui/core/Badge";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  appbar: {
    // color: "#f7f7f7",
    backgroundColor: "#f7f7f7",
  },
  container_mobile: {
    padding: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
  search_container: {
    paddingTop: theme.spacing(1),
  },
  search_button: {
    marginTop: theme.spacing(1),
  },
  search_bar: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(3),
  },
}));
function StickyNav() {
  const [searchArea, setSearchArea] = useState(false);
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:700px)");

  return (
    <div>
      {matches ? (
        <AppBar
          position="sticky"
          // style={{ position: "fixed" }}
          className={classes.appbar}
        >
          <Container maxWidth="md">
            {" "}
            <Toolbar>
              <IconButton>
                <GrMenu size="1.3em" />
              </IconButton>
              <Typography
                color="secondary"
                variant="subtitle1"
                className={classes.title}
              >
                CATEGORIES
              </Typography>{" "}
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder="search over 10,000 products"
                className={classes.search_bar}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <GoSearch size="1.2em" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              {/* <Button>
                <GoSearch />
              </Button> */}
              <IconButton>
                <FaUserCircle size="1.2em" />
              </IconButton>
              <IconButton>
                <Badge badgeContent={0} color="primary" showZero="true">
                  <HiOutlineShoppingBag size="1.2em" color="#777777" />
                </Badge>
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      ) : (
        <div>
          <AppBar
            position="sticky"
            // style={{ position: "fixed", top: "64px" }}
            className={classes.appbar}
          >
            <Container maxWidth="md" className={classes.container_mobile}>
              <Toolbar>
                <Typography
                  color="secondary"
                  variant="subtitle1"
                  className={classes.title}
                >
                  CATEGORIES
                </Typography>
                <IconButton
                  onClick={() => {
                    setSearchArea(!searchArea);
                  }}
                >
                  <GoSearch />
                </IconButton>
                <IconButton>
                  <AiTwotonePhone />
                </IconButton>
                <IconButton>
                  <Badge badgeContent={0} color="primary" showZero="true">
                    <HiOutlineShoppingBag size="1.2em" color="#777777" />
                  </Badge>
                </IconButton>
              </Toolbar>{" "}
            </Container>
          </AppBar>
          {searchArea && (
            <Container className={classes.search_container}>
              {" "}
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder="search over 10,000 products"
                // color="secondary"
              ></TextField>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                className={classes.search_button}
              >
                search
              </Button>
            </Container>
          )}
        </div>
      )}
    </div>
  );
}

export default StickyNav;
