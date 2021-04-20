import Swal from "sweetalert2";

export default (type, exist) => {
  Swal.fire({
    icon: `${type === "ok" ? "success" : "error"}`,
    title: `${type === "ok" ? "Ok" : "Error..."}`,
    text: `${
      type === "ok"
        ? "Billetera agregada correctamente"
        : exist === "exist"
        ? "La Billetera pertenece a otro usuario"
        : "No existe la billetera que intenta agregar"
    }`,
    footer: `<p >${
      type === "error"
        ? "Es probable que la billetera ingresada no exista o pertenece a otro usuario"
        : ""
    }</p>`,
  });
};
