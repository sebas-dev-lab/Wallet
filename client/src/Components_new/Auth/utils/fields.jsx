import React, { useState } from "react";
import { MapField } from "./mapFields.jsx";
import Button from "@material-ui/core/Button";
import { controlType, controlErrors } from "../../../services/auth";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login, singUp } from "../../../Redux/Actions/auth.js";

export const Fields = (type) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [singin, setSingin] = useState({
    userName: "",
    password: "",
  });
  const [register, setRegister] = useState({
    userName: "",
    password: "",
    passwordConfirmation: "",
  });
  const [errors, setErrors] = useState({
    userNameError: false,
    passwordError: false,
    passwoedConfirmationError: false,
  });
  const [errorText, setErrorText] = useState({
    userNameError: "",
    passwordError: "",
    passwoedConfirmationError: "",
  });

  let data = controlType(type) ? [register, setRegister] : [singin, setSingin];

  const sendData = (e) => {
    e.preventDefault();
    let item = type === "login" ? singin : register;
    const { status, errorText } = controlErrors(item);
    setErrorText({
      userNameError: errorText.errrorUserName,
      passwordError: errorText.errorPassword,
      passwoedConfirmationError: errorText.errorConfirmation,
    });
    setErrors({
      userNameError: status.userNameStatus,
      passwordError: status.passwordStatus,
      passwoedConfirmationError: status.confirmationStatus,
    });

    if (type === "login") {
      singin.userName = singin.userName.toLowerCase();
      dispatch(login(singin.userName, singin.password, history));
    } else {
      register.userName = register.userName.toLowerCase();
      if (register.password === register.passwordConfirmation) {
        console.log("entro");
        dispatch(singUp(register.userName, register.password, history));
      }
    }
  };

  console.log(register);

  return (
    <>
      {MapField(type, data, errors, errorText)}

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={sendData}
      >
        {type === "singup" ? "Sing Up" : "Login"}
      </Button>
    </>
  );
};
