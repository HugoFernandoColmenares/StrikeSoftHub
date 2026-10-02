import { Injectable } from '@angular/core';
import { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';
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
    const result = await strikeAlert.fire({
      title,
      text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: confirmText,
      cancelButtonText: NOTIFY_COPY.cancel,
    });

    return result.isConfirmed;
  }

  toast(title: string, icon: SweetAlertIcon = 'success'): Promise<SweetAlertResult> {
    return strikeAlert.fire({
      toast: true,
      position: 'top-end',
      icon,
      title,
      showConfirmButton: false,
      timer: 2400,
      timerProgressBar: true,
      customClass: { popup: 'swal-strike-toast', title: 'swal-strike-title' },
    });
  }

  private fire(icon: SweetAlertIcon, title: string, text: string): Promise<SweetAlertResult> {
    return strikeAlert.fire({ icon, title, text });
  }
}
