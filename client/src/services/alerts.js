import Swal from "sweetalert2";

export const singUpAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Ok",
    text: `Usuario creado correctamente`,
  });
};

export const loginAlert = (type) => {
  Swal.fire({
    icon: `${type === "ok" ? "success" : "error"}`,
    title: `${type === "ok" ? "Ok" : "Error..."}`,
  });
};

export const walletAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Ok",
    text: `Billetera agregada correctamente`,
  });
};

export const errorCreateAlert = (type) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `Error al ${
      type === "wallet" ? "agregar la billetera" : "crear el usuario"
    }`,
    footer: `<p >${
      type === "wallet"
        ? "Es probable que la billetera ingresada no exista"
        : null
    }</p>`,
  });
};
