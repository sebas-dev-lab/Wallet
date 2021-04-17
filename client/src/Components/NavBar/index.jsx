import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Actions/auth";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({ type }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutUser = () => {
    dispatch(logout(history));
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          {!type ? (
            <>
              <Link to="/singin">
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  aria-label="menu"
                >
                  <PersonIcon />
                </IconButton>
              </Link>
              <Link to="/singup">
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  aria-label="menu"
                >
                  <PersonAddIcon />
                </IconButton>
              </Link>
            </>
          ) : (
            <>
              <Button onClick={logoutUser}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  aria-label="menu"
                />
                <ExitToAppIcon />
              </Button>
              <Link to="/dash">
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  aria-label="menu"
                >
                  <DashboardIcon />
                </IconButton>
              </Link>
            </>
          )}
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="menu"
            >
              <HomeIcon />
            </IconButton>
          </Link>
          {}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
