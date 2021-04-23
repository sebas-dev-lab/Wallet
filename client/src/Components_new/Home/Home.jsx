import React from "react";
import { makeStyles } from "@material-ui/core";
import OtionsHome from "./Options";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100vh",
    width: "100%",
  },
}));
const HomePage = ({ className, ...rest }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <OtionsHome />
    </div>
  );
};
export default HomePage;
