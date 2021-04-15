import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import HttpsTwoToneIcon from "@material-ui/icons/HttpsTwoTone";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style/ui";
import AuthForm from "./utils/form";

const Auth = ({ type }) => {
  const classes = useStyles();

  return (
    <Grid container component="main" justify="center" className={classes.root}>
      <CssBaseline />
      <Grid item xs={8} sm={6} md={4} component={Paper} elevation={20} square>
        <div
          className={
            type === "singup" ? classes.SingUppaper : classes.Loginpaper
          }
        >
          <Avatar className={classes.avatar}>
            <HttpsTwoToneIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {type === "singup" ? "Sing Up" : "Login"}
          </Typography>
          <AuthForm useStyles={useStyles} type={type} />
        </div>
      </Grid>
    </Grid>
  );
};

export default Auth;
