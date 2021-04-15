import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Copyright } from "../../../services/copyright";
import { Fields } from "./fields.jsx";

const AuthForm = ({ useStyles, type }) => {
  const classes = useStyles();
  return (
    <>
      <form className={classes.margin} noValidate>
        {Fields(type)}
        <Grid container>
          <Grid item justify="space-between" xs>
            <Link href="#">
              {type === "login" ? "¿Perdiste tu contraseña?" : null}
            </Link>
          </Grid>
          <Grid item>
            <Link href={type === "singup" ? "/singin" : "/singup"}>
              {type === "singup"
                ? "¿Ya tienes cuenta?"
                : "¿Todavía no tienes una cuenta?"}
            </Link>
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
