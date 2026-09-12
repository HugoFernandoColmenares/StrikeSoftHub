import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SupabaseClientService } from './supabase-client.service';

@Injectable({ providedIn: 'root' })
export class BackendStatusService {
  private readonly supabase = inject(SupabaseClientService);
  private readonly online = signal(false);
  private readonly checking = signal(false);

  readonly isOnline = this.online.asReadonly();
  readonly isChecking = this.checking.asReadonly();
  readonly modeLabel = computed(() => (this.online() ? 'Live forge' : 'Local arsenal'));

  constructor() {
    window.addEventListener('online', () => void this.probe());
    window.addEventListener('offline', () => this.online.set(false));
    window.setInterval(() => void this.probe(), 30_000);
  }

  async probe(): Promise<boolean> {
    if (!this.supabase.configured || !navigator.onLine) {
      this.online.set(false);
      return false;
    }

    this.checking.set(true);

    try {
      const url = `${environment.supabaseUrl.replace(/\/$/, '')}/auth/v1/health`;
      const response = await fetch(url, {
        method: 'GET',
        headers: { apikey: environment.supabaseAnonKey },
        signal: AbortSignal.timeout(4000),
      });
      const reachable = response.ok;
      this.online.set(reachable);
      return reachable;
    } catch {
      this.online.set(false);
      return false;
    } finally {
      this.checking.set(false);
    }
  }
}
