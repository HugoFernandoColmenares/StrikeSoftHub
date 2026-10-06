import Swal from 'sweetalert2';

export const strikeAlert = Swal.mixin({
  buttonsStyling: false,
  allowOutsideClick: true,
  allowEscapeKey: true,
  showClass: { popup: '' },
  hideClass: { popup: '' },
  customClass: {
    popup: 'swal-strike-popup',
    title: 'swal-strike-title',
    htmlContainer: 'swal-strike-html',
    confirmButton: 'swal-strike-confirm',
    cancelButton: 'swal-strike-cancel',
    actions: 'swal-strike-actions',
  },
});
