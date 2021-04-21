import Swal from "sweetalert2";

export default () =>
  Swal.fire({
    title: "Eliminar Wallet",
    text: "¿Está seguro que quiere eliminar su billetera?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar!!",
  });
