import React from "react";
import { makeStyles } from "@material-ui/core";
import img from "./crypto.gif";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    backgroundImage: `url(${img})`,
    height: "100vh",
    width: "100%",
  },
}));
const HomePage = ({ className, ...rest }) => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};
export default HomePage;
