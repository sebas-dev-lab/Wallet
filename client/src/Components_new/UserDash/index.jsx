import React from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { mainListItems } from "./listItems";
import { useStyles } from "./style/style_ui";
import { Copyright } from "../../services/copyright";
import DashNavBar from "./NavBar";
import WalletDash from "./Wallet";
import { Route, BrowserRouter as Router } from "react-router-dom";
import UserData from "./UserData";

export default function Dashboard({ toggle, themeState, user, coins }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <DashNavBar
        toggle={toggle}
        themeState={themeState}
        classes={classes}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Router>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={2}>
              <Route exact path="/dash/wallet">
                <WalletDash
                  user={user}
                  coins={coins}
                  fixedHeightPaper={fixedHeightPaper}
                  classes={classes}
                />
              </Route>
              <Route exact path="/dash/user">
                <UserData
                  classes={classes}
                  fixedHeightPaper={fixedHeightPaper}
                />
              </Route>
            </Grid>
          </Container>
          <Box pt={4}>
            <Copyright />
          </Box>
        </main>
      </Router>
    </div>
  );
}
