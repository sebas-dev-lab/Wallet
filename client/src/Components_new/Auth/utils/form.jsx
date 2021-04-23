import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Copyright } from "../../../services/copyright";
import { Fields } from "./fields.jsx";
import { NavLink } from "react-router-dom";

const AuthForm = ({ useStyles, type }) => {
  const classes = useStyles();
  return (
    <>
      <form className={classes.margin} noValidate>
        {Fields(type)}
        <Grid container>
          <Grid item justify="space-between" xs>
            <NavLink to="#">
              {type === "login" ? "¿Perdiste tu contraseña?" : null}
            </NavLink>
          </Grid>
          <Grid item>
            <NavLink to={type === "singup" ? "/singin" : "/singup"}>
              {type === "singup"
                ? "¿Ya tienes cuenta?"
                : "¿Todavía no tienes una cuenta?"}
            </NavLink>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </form>
    </>
  );
};

export default AuthForm;
