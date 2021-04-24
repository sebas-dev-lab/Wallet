import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, Paper, makeStyles, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { getUserData, updateUserData } from "../../../Redux/Actions/user";
import { byeUser } from "../../../Redux/Actions/user";
import Modal from "@material-ui/core/Modal";
import Fade from "../Wallet/utils/fade";
import Backdrop from "@material-ui/core/Backdrop";
import { useStyles } from "../Wallet/styles/ui.js";
import updateUser from "../../../services/alerts/updateUser";
import { simpleErrorStyle } from "../../../services/verify";
import { verifySession } from "../../../Redux/Actions/auth";

const useStyles_2 = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
  text: {
    margin: "2em",
  },
}));

const emptyUserData = {
  userName: "",
  password: "",
};

const UserData = ({ classes, fixedHeightPaper }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes_2 = useStyles_2();
  const clsses_3 = useStyles();
  const [edit, setEdit] = useState(false);
  const user = useSelector((state) => state.user.user);

  const [userData, setUserData] = useState(emptyUserData);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    dispatch(getUserData());
  }, []);

  const onEdit = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };

  const onChangeField = (e) => {
    e.preventDefault();
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onChangeConfPass = (e) => {
    e.preventDefault();
    setConfirmPassword(e.target.value);
  };

  const sendData = (e) => {
    e.preventDefault();
    handleOpen();
    onEdit(e);
  };
  const sendDataCP = (e) => {
    e.preventDefault();
    const status = simpleErrorStyle(userData.password, confirmPassword);
    handleClose();
    if (status) {
      if (userData.userName !== "") {
        dispatch(updateUserData(userData.userName, userData.password));
      } else {
        updateUser("error", "El Alias no debe quedar vacío");
      }
    } else {
      updateUser("error", "Las contraseñas no coinciden");
    }
  };
  const delUser = () => {
    dispatch(byeUser(user.id, history));
  };
  return (
    <>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper} className={classes.paper}>
          <form className={classes_2.root} noValidate autoComplete="off">
            {!edit ? (
              <>
                <TextField
                  className={classes_2.text}
                  disabled
                  name="userName"
                  id="standard-disabled"
                  label={user.userName}
                />
                <TextField
                  className={classes_2.text}
                  disabled
                  name="password"
                  id="standard-disabled"
                  type="password"
                  label="Password"
                />
              </>
            ) : (
              <>
                <TextField
                  className={classes_2.text}
                  required
                  id="standard-required"
                  label="Alias"
                  defaultValue={user.userName}
                  name="userName"
                  onChange={(e) => onChangeField(e)}
                />
                <TextField
                  className={classes_2.text}
                  required
                  type="password"
                  name="password"
                  id="standard-required"
                  label="Password"
                  onChange={(e) => onChangeField(e)}
                />
              </>
            )}
            {!edit ? (
              <Button
                onClick={(e) => onEdit(e)}
                color="primary"
                variant="outlined"
              >
                Editar
              </Button>
            ) : (
              <Button
                onClick={(e) => sendData(e)}
                color="primary"
                variant="outlined"
              >
                Enviar
              </Button>
            )}

            <Modal
              aria-labelledby="spring-modal-title"
              aria-describedby="spring-modal-description"
              className={clsses_3.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={clsses_3.paper_modal}>
                  <form className={classes.root}>
                    <TextField
                      className={classes.margin}
                      id="custom-css-standard-input"
                      label="Confirma tu contraseña"
                      type="password"
                      name="wallet_coint"
                      helperText={
                        confirmPassword !== ""
                          ? simpleErrorStyle(userData.password, confirmPassword)
                            ? ""
                            : "Las contraseñas no coinciden"
                          : false
                      }
                      error={
                        confirmPassword !== ""
                          ? !simpleErrorStyle(
                              userData.password,
                              confirmPassword
                            )
                          : false
                      }
                      value={confirmPassword}
                      onChange={(e) => onChangeConfPass(e)}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      disableElevation
                      className={clsses_3.button}
                      onClick={sendDataCP}
                    >
                      Enviar
                    </Button>
                  </form>
                </div>
              </Fade>
            </Modal>
          </form>
        </Paper>{" "}
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper} className={classes.paper}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            className={clsses_3.button}
            onClick={delUser}
          >
            Darme de baja
          </Button>
        </Paper>
      </Grid>
    </>
  );
};

export default UserData;
