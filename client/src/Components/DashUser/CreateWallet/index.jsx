import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { addWallet } from "../../../Redux/Actions/wallet";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    marginLeft: theme.spacing(2),
  },
}));

const AddWallet = () => {
  const classes = useStyles();
  let initialState = {
    wallet_coint: "",
    wallet_name: "",
  };
  let [wallet, setWallet] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const clearState = () => {
    setWallet(initialState);
  };
  const onChange = (e) => {
    e.preventDefault();
    setWallet({ ...wallet, [e.target.name]: e.target.value });
  };

  const createWallet = (e) => {
    e.preventDefault();
    dispatch(addWallet(wallet.wallet_name, wallet.wallet_coint, history));
    clearState();
  };
  return (
    <form className={classes.root}>
      <TextField
        className={classes.margin}
        id="custom-css-standard-input"
        label="Wallet Name"
        name="wallet_name"
        value={wallet.wallet_name}
        onChange={(e) => onChange(e)}
      />
      <TextField
        className={classes.margin}
        id="custom-css-standard-input"
        label="Bill"
        name="wallet_coint"
        value={wallet.wallet_coint}
        onChange={(e) => onChange(e)}
      />
      <Button
        onClick={createWallet}
        variant="contained"
        color="primary"
        disableElevation
      >
        Crear!
      </Button>
    </form>
  );
};

export default AddWallet;
