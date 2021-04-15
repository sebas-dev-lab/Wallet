import React, { useState } from "react";
import { MapField } from "./mapFields.jsx";
import Button from "@material-ui/core/Button";
import { controlType, controlErrors } from "../../../services/auth";
import axios from "axios";
import config from "../../../services/config";

const URL = config.URL + ":" + config.PORT;

export const Fields = (type) => {
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
    if (
      !status.userNameStatus &&
      !status.confirmationStatus &&
      !status.passwordStatus
    ) {
      if (type === "login") {
        axios
          .get(
            "http://localhost:4000/auth",
            {
              userName: singin.userName,
              password: singin.password,
            },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
            setSingin({
              userName: "",
              password: "",
            });
          });
      } else {
        axios
          .post(
            "http://localhost:4000/auth",
            { userName: register.userName, password: register.password },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
            setRegister({
              userName: "",
              password: "",
              passwordConfirmation: "",
            });
          });
      }
    }
  };

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
