import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { EpicButtonComponent } from '../../shared/epic-button/epic-button.component';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule, EpicButtonComponent],
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

  readonly mode = signal<'login' | 'register'>('login');
  readonly form = this.fb.nonNullable.group({
    displayName: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  toggle(): void {
    this.mode.update((mode) => (mode === 'login' ? 'register' : 'login'));
  }

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { email, password, displayName } = this.form.getRawValue();
    const ok =
      this.mode() === 'login'
        ? await this.auth.login(email, password)
        : await this.auth.register(email, password, displayName || email.split('@')[0]);

    if (!ok) {
      return;
    }

    await this.notify.success(
      this.mode() === 'login' ? 'Welcome back' : 'Enlisted',
      'Your pass is active in this arena.',
    );
    const redirect = this.route.snapshot.queryParamMap.get('redirect') || '/profile';
    await this.router.navigateByUrl(redirect);
  }
}
