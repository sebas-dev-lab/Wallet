import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NotWallet from "../NotWallet";
import AddWallet from "../CreateWallet";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import { delWallet } from "../../../Redux/Actions/wallet";

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
  const dispatch = useDispatch();
  const classes = useStyles();
  let estructure = ["Id", "Wallet", "Balance", "Acciones"];

  const deleteWallet = (id) => {
    dispatch(delWallet(id));
  };

  return (
    <div className={classes.root}>
      {}
      <Grid container spacing={4}>
        {coins.length > 0
          ? estructure.map((item) => {
              return (
                <Grid
                  item
                  xs={
                    item === "Id"
                      ? 1
                      : item === "Wallet"
                      ? 5
                      : item === "Balance"
                      ? 4
                      : item === "Acciones"
                      ? 1
                      : null
                  }
                >
                  <Paper className={classes.paper}>{item}</Paper>
                </Grid>
              );
            })
          : null}
        {coins.length > 0
          ? coins.map((item, idx) => {
              return (
                <>
                  <Grid item xs={1}>
                    <Paper className={classes.paper}>{idx}</Paper>
                  </Grid>
                  <Grid item xs={5}>
                    <Paper className={classes.paper}>{item.account}</Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paper}>
                      {item.balance === 0
                        ? 0
                        : Math.floor(item.balance / (1000000 * 1000000))}
                    </Paper>
                  </Grid>
                  <Grid item xs={1}>
                    <Paper className={classes.paper}>
                      {" "}
                      <DeleteSweepIcon />
                    </Paper>
                  </Grid>
                </>
              );
            })
          : null}
        {user.walletMsj === "ok" ? (
          <>
            <Grid item xs={6}>
              <Paper className={classes.paper}>Total</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                {Math.floor(user.total.total_2)}
              </Paper>
            </Grid>
          </>
        ) : (
          <NotWallet />
        )}
      </Grid>
      <br />
      <br />
      <br />

      <AddWallet />
    </div>
  );
};

export default GridDash;
