const {
  commonValidate,
  passwordValidate,
  confirmationPassword,
} = require("./verify");

module.exports = {
  login: ["userName", "password"],
  singup: ["userName", "password", "passwordConfirmation"],
  string: {
    userName: "Usuario",
    password: "Contraseña",
    passwordConfirmation: "Confirma tu contraseña",
  },
  controlType: (type) => {
    if (type === "singup") {
      return true;
    }
    return false;
  },
  controlErrors: (data) => {
    for (let i in data) {
      if (i === "userName") {
        var userNameStatus = commonValidate(data[i]).commonStatus;
        var errorUserName = commonValidate(data[i]).errorCommon;
      } else if (i === "password") {
        var { passwordStatus, errorPassword } = passwordValidate(data[i]);
      } else if (i === "passwordConfirmation") {
        var { confirmationStatus, errorConfirmation } = confirmationPassword(
          data[i],
          data["password"]
        );
      }
    }

    return {
      status: {
        passwordStatus,
        userNameStatus,
        confirmationStatus,
      },
      errorText: {
        errorPassword,
        errorUserName,
        errorConfirmation,
      },
    };
  },
};
