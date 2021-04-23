import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Paper, makeStyles, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { getUserData, updateUserData } from "../../../Redux/Actions/user";

const useStyles = makeStyles((theme) => ({
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

  const classes_2 = useStyles();
  const [edit, setEdit] = useState(false);
  const user = useSelector((state) => state.user.user);

  const [userData, setUserData] = useState(emptyUserData);

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

  const sendData = (e) => {
    e.preventDefault();
    console.log(userData);
    dispatch(updateUserData(userData.userName, userData.password));
    onEdit(e);
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
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default UserData;
