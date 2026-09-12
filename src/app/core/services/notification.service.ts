import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';

const forgeAlert = Swal.mixin({
  background: '#2A2D34',
  color: '#F0F0F0',
  confirmButtonColor: '#D32F2F',
  cancelButtonColor: '#3A3F47',
  buttonsStyling: false,
  customClass: {
    popup: 'swal-forge-popup',
    title: 'swal-forge-title',
    htmlContainer: 'swal-forge-html',
    confirmButton: 'swal-forge-confirm',
    cancelButton: 'swal-forge-cancel',
  },
});

@Injectable({ providedIn: 'root' })
export class NotificationService {
  success(title: string, text = ''): Promise<SweetAlertResult> {
    return this.fire('success', title, text);
  }

  error(title: string, text = ''): Promise<SweetAlertResult> {
    return this.fire('error', title, text);
  }

  info(title: string, text = ''): Promise<SweetAlertResult> {
    return this.fire('info', title, text);
  }

  warning(title: string, text = ''): Promise<SweetAlertResult> {
    return this.fire('warning', title, text);
  }

  async confirm(title: string, text = '', confirmText = 'Confirm'): Promise<boolean> {
    const result = await forgeAlert.fire({
      title,
      text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: confirmText,
      cancelButtonText: 'Cancel',
    });

    return result.isConfirmed;
  }

  toast(title: string, icon: SweetAlertIcon = 'success'): Promise<SweetAlertResult> {
    return forgeAlert.fire({
      toast: true,
      position: 'top-end',
      icon,
      title,
      showConfirmButton: false,
      timer: 2200,
      timerProgressBar: true,
    });
  }

  private fire(icon: SweetAlertIcon, title: string, text: string): Promise<SweetAlertResult> {
    return forgeAlert.fire({ icon, title, text });
  }
}
