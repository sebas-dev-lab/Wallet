import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import DashTable from "./Table";
import AddWallet from "./CreateWallet";
import TotalTable from "./TotalTable";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

const WalletDash = ({ user, coins, fixedHeightPaper }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper} className={classes.paper}>
          <h3>Billeteras</h3> <DashTable user={user} coins={coins} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper} className={classes.paper}>
          <h3>Agrega una billetera</h3>
          <AddWallet />
        </Paper>
        <br></br>
        <Paper className={fixedHeightPaper} className={classes.paper}>
          <h3>Balance total</h3>
          <TotalTable user={user} />
        </Paper>
      </Grid>
    </>
  );
};

export default WalletDash;
