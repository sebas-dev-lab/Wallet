import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  paper_2: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
}));

const GridDash = ({ user, coins }) => {
  const classes = useStyles();

  let estructure = ["Id", "Wallet", "Balance"];
  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        {estructure.map((item) => {
          return (
            <Grid item xs={4}>
              <Paper className={classes.paper}>{item}</Paper>
            </Grid>
          );
        })}
        {coins
          ? coins.map((item, idx) => {
              return (
                <>
                  <Grid item xs={4}>
                    <Paper className={classes.paper}>{idx}</Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paper}>
                      {item.account.slice(0, 10) + "..."}
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paper}>
                      {Math.floor(item.balance / (1000000 * 1000000))}
                    </Paper>
                  </Grid>
                </>
              );
            })
          : null}
        {coins ? (
          <>
            <Grid item xs={6}>
              <Paper className={classes.paper}>Total</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                {Math.floor(user.total / (1000000 * 1000000))}
              </Paper>
            </Grid>
          </>
        ) : null}
      </Grid>
    </div>
  );
};

export default GridDash;