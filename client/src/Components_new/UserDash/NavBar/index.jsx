import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { Button, Tooltip } from "@material-ui/core";
import { Sun as LightIcon, Moon as DarkIcon } from "react-feather";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { logout } from "../../../Redux/Actions/auth";
import logo from "../../public/logo_2.png";
const DashNavBar = ({
  toggle,
  themeState,
  classes,
  handleDrawerOpen,
  open,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutUser = () => {
    dispatch(logout(history));
  };
  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          <img src={logo} className={classes.avatar} />
        </Typography>
        <Box ml={2}>
          <Button onClick={logoutUser}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="menu"
            />
            <ExitToAppIcon />
          </Button>
        </Box>
        <Box ml={2}>
          <Tooltip
            title={themeState.mode !== "LIGHT" ? "Light mode" : "Dark mode"}
          >
            <IconButton color="inherit" onClick={toggle}>
              {themeState.mode === "LIGHT" ? <DarkIcon /> : <LightIcon />}
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DashNavBar;
