module.exports = {
  commonValidate: (data) => {
    let commonStatus = false;
    let errorCommon = "";
    if (!data) {
      commonStatus = true;
      errorCommon = "Campo obligatorio";
    } else if (data.length < 6) {
      commonStatus = true;
      errorCommon = "Debe tener más de 6 caracteres";
    } else if (typeof data !== "undefined") {
      if (!data.match(/^[a-zA-Z]+$/)) {
        commonStatus = true;
        errorCommon = "¡¡Solo letras!!";
      }
    }
    return { commonStatus, errorCommon };
  },
  passwordValidate: (data) => {
    let passwordStatus = false;
    let errorPassword = "";
    if (!data) {
      passwordStatus = true;
      errorPassword = "Campo obligatorio";
    } else if (data.length < 6) {
      passwordStatus = true;
      errorPassword = "Debe tener más de 6 caracteres";
    } else if (typeof data !== "undefined") {
      if (!data.match(/^[a-zA-Z]+$/)) {
        passwordStatus = true;
        errorPassword = "¡¡Solo letras!!";
      }
    }

    return { passwordStatus, errorPassword };
  },
  confirmationPassword: (data, data_2) => {
    let confirmationStatus = false;
    let errorConfirmation = "";
    if (!data) {
      console.log("ando");
      confirmationStatus = true;
      errorConfirmation = "Campo obligatorio";
    } else if (data !== data_2) {
      confirmationStatus = true;
      errorConfirmation = "Las contraseñas no coinciden";
    }
    return { confirmationStatus, errorConfirmation };
  },
  errorStyle: (item, errors, errorText, mode) => {
    let error = mode === "status" ? false : "";
    let setup = mode === "status" ? errors : errorText;
    if (item === "userName") {
      error = setup.userNameError;
    } else if (item === "password") {
      error = setup.passwordError;
    } else if (item === "passwordConfirmation") {
      error = setup.passwoedConfirmationError;
    }
    return error;
  },
};
