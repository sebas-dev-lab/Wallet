import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { addWallet } from "../../../Redux/Actions/wallet";
import { useHistory } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useStyles } from "./styles/ui.js";
import { cryptos } from "./utils/cryptos";

const AddWallet = ({ handleClose }) => {
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
    console.log(wallet);
    dispatch(addWallet(wallet.wallet_name, wallet.wallet_coint, history));
    clearState();
    handleClose();
  };

  return (
    <form className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Crypto</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="wallet_name"
          value={wallet.wallet_name}
          onChange={(e) => onChange(e)}
        >
          {cryptos.map((cry) => {
            return (
              <MenuItem value={cry.name} name="wallet_name">
                {" "}
                <img src={cry.icon} />
                {cry.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

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
        className={classes.button}
      >
        Agregar!
      </Button>
    </form>
  );
};

export default AddWallet;
