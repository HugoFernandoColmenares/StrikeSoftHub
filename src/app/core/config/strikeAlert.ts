import Swal from "sweetalert2";

export const strikeAlert = Swal.mixin({
  background: '#111111',
  color: '#F5F5F5',
  buttonsStyling: false,
  showClass: { popup: '' },
  hideClass: { popup: '' },
  customClass: {
    popup: 'swal-strike-popup',
    title: 'swal-strike-title',
    htmlContainer: 'swal-strike-html',
    confirmButton: 'swal-strike-confirm',
    cancelButton: 'swal-strike-cancel',
  },
});