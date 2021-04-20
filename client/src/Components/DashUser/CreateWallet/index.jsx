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
    margin: theme.spacing(1),
  },
}));

const AddWallet = () => {
  const classes = useStyles();
  const [wallet, setWallet] = useState({
    wallet_coint: "",
    wallet_name: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const onChange = (e) => {
    e.preventDefault();
    setWallet({ ...wallet, [e.target.name]: e.target.value });
  };

  const createWallet = () => {
    dispatch(addWallet(wallet.wallet_name, wallet.wallet_coint, history));
  };
  return (
    <form className={classes.root}>
      <TextField
        className={classes.margin}
        id="custom-css-standard-input"
        label="Wallet Name"
        name="wallet_name"
        onChange={(e) => onChange(e)}
      />
      <TextField
        className={classes.margin}
        id="custom-css-standard-input"
        label="Bill"
        name="wallet_coint"
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
