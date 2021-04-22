import React from "react";
import TextField from "@material-ui/core/TextField";
import { login, singup, string, controlType } from "../../../services/auth";
import { errorStyle } from "../../../services/verify";

export const MapField = (type, data, errors, errorText) => {
  if (controlType(type)) {
    var [register, setRegister] = data;
  } else if (!controlType(type)) {
    var [singin, setSingin] = data;
  }
  const maping = type === "login" ? login : singup;

  const handleChange = (e) => {
    e.preventDefault();
    if (controlType(type)) {
      setRegister({ ...register, [e.target.name]: e.target.value });
    } else {
      setSingin({ ...singin, [e.target.name]: e.target.value });
    }
  };
  return (
    <>
      {maping.map((item, idx) => {
        return (
          <>
            <TextField
              variant="outlined"
              margin="normal"
              required
              type={
                item === "password" || item === "passwordConfirmation"
                  ? "password"
                  : null
              }
              size="small"
              fullWidth
              id={idx}
              label={string[item]}
              name={item}
              autoComplete={item}
              error={errorStyle(item, errors, errorText, "status")}
              helperText={errorStyle(item, errors, errorText, "")}
              autoFocus
              style={{ margin: 6, width: "90%" }}
              onChange={(e) => handleChange(e)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </>
        );
      })}
    </>
  );
};
