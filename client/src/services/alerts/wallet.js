import Swal from "sweetalert2";

export default (type) => {
  Swal.fire({
    icon: `${type === "ok" ? "success" : "error"}`,
    title: `${type === "ok" ? "Ok" : "Error..."}`,
    text: `${
      type === "ok"
        ? "Billetera agregada correctamente"
        : "Error al crear la billetera"
    }`,
    footer: `<p >${
      type === "error" ? "Es probable que la billetera ingresada no exista" : ""
    }</p>`,
  });
};
