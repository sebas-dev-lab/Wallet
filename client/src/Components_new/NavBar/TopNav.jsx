import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Tooltip,
  Button,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import {
  Menu as MenuIcon,
  Sun as LightIcon,
  Moon as DarkIcon,
} from "react-feather";
import { useStyles } from "./style/navStyle";

const TopNav = ({ toggle, themeState, type }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Box ml={2} flexGrow={1} />
        {!type ? (
          <>
            <Box ml={2}>
              <Link to="/singin">
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  aria-label="menu"
                >
                  <PersonIcon />
                </IconButton>
              </Link>
            </Box>
            <Box ml={2}>
              <Link to="/singup">
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  aria-label="menu"
                >
                  <PersonAddIcon />
                </IconButton>
              </Link>
            </Box>
          </>
        ) : null}

        <Box ml={2}>
          <Tooltip
            title={themeState.mode !== "LIGHT" ? "Light mode" : "Dark mode"}
          >
            <IconButton onClick={toggle}>
              {themeState.mode === "LIGHT" ? <DarkIcon /> : <LightIcon />}
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
