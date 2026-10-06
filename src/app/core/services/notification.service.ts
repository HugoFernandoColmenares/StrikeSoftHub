import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';
import { strikeAlert } from '../config/strikeAlert';
import { NOTIFY_COPY } from '../copy/notifications.copy';

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

  async confirm(title: string, text = '', confirmText = NOTIFY_COPY.reserveConfirm): Promise<boolean> {
    if (Swal.isVisible()) {
      Swal.close();
    }

    const result = await strikeAlert.fire({
      title,
      text,
      icon: 'question',
      showCancelButton: true,
      focusCancel: true,
      confirmButtonText: confirmText,
      cancelButtonText: NOTIFY_COPY.cancel,
      allowOutsideClick: true,
      allowEscapeKey: true,
    });

    return result.isConfirmed;
  }

  async toast(title: string, icon: SweetAlertIcon = 'success'): Promise<SweetAlertResult> {
    if (Swal.isVisible()) {
      Swal.close();
    }

    return strikeAlert.fire({
      toast: true,
      position: 'bottom-end',
      icon,
      title,
      showConfirmButton: false,
      showCloseButton: true,
      timer: 8000,
      timerProgressBar: true,
      allowOutsideClick: true,
      customClass: { popup: 'swal-strike-toast', title: 'swal-strike-title' },
    });
  }

  private async fire(icon: SweetAlertIcon, title: string, text: string): Promise<SweetAlertResult> {
    if (Swal.isVisible()) {
      Swal.close();
    }

    return strikeAlert.fire({
      icon,
      title,
      text,
      allowOutsideClick: true,
      allowEscapeKey: true,
    });
  }
}
