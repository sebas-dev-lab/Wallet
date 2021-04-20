import Swal from "sweetalert2";

export default (type) =>
  Swal.fire({
    icon: `${type === "ok" ? "success" : "error"}`,
    title: `${type === "ok" ? "Ok" : "Error..."}`,
  });
