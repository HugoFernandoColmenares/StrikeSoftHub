import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { BackendStatusService } from '../../core/services/backend-status.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly notify = inject(NotificationService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly backend = inject(BackendStatusService);
  readonly mode = signal<'login' | 'register'>('login');
  readonly submitting = signal(false);

  readonly form = this.fb.nonNullable.group({
    displayName: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  toggle(): void {
    this.mode.update((mode) => (mode === 'login' ? 'register' : 'login'));
  }

  showError(control: 'email' | 'password'): boolean {
    const field = this.form.controls[control];
    return field.invalid && (field.dirty || field.touched);
  }

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    const { email, password, displayName } = this.form.getRawValue();

    try {
      const ok =
        this.mode() === 'login'
          ? await this.auth.login(email, password)
          : await this.auth.register(email, password, displayName || email.split('@')[0]);

      if (!ok) {
        return;
      }

      await this.notify.toast(this.mode() === 'login' ? 'Signed in' : 'Pass created');
      await this.router.navigateByUrl(this.route.snapshot.queryParamMap.get('redirect') || '/profile');
    } finally {
      this.submitting.set(false);
    }
  }
}
