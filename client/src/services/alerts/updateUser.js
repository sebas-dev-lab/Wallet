import Swal from "sweetalert2";

export default (type, text) =>
  Swal.fire({
    icon: `${type === "ok" ? "success" : "error"}`,
    title: `${type === "ok" ? "Ok" : "Error..."}`,
    text: `${
      type === "ok"
        ? "Tus datos fueron actualizados correctamente"
        : "Error al intentar actualizar tus datos: " + `${text}`
    }`,
  });
