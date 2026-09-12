import { Injectable, computed, inject, signal } from '@angular/core';
import { STORAGE_KEYS } from '../config/storage-keys';
import { LocalAccount, UserSession } from '../models/user-session.model';
import { BackendStatusService } from './backend-status.service';
import { createId, hashSecret } from './crypto.util';
import { LocalStoreService } from './local-store.service';
import { NotificationService } from './notification.service';
import { SupabaseClientService } from './supabase-client.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly store = inject(LocalStoreService);
  private readonly backend = inject(BackendStatusService);
  private readonly supabase = inject(SupabaseClientService);
  private readonly notify = inject(NotificationService);
  private readonly session = signal<UserSession | null>(this.store.read(STORAGE_KEYS.session, null));

  readonly currentUser = this.session.asReadonly();
  readonly isAuthenticated = computed(() => this.session() !== null);

  async register(email: string, password: string, displayName: string): Promise<boolean> {
    if (this.backend.isOnline() && this.supabase.client) {
      const { data, error } = await this.supabase.client.auth.signUp({
        email,
        password,
        options: { data: { display_name: displayName } },
      });

      if (error || !data.user) {
        await this.notify.error('Registration failed', error?.message ?? 'The server rejected the request.');
        return false;
      }

      this.persistSession({
        id: data.user.id,
        email,
        displayName,
        source: 'supabase',
      });
      return true;
    }

    const accounts = this.store.read<LocalAccount[]>(STORAGE_KEYS.accounts, []);
    if (accounts.some((account) => account.email === email.toLowerCase())) {
      await this.notify.warning('Already registered', 'That email already holds a pass on this device.');
      return false;
    }

    const account: LocalAccount = {
      id: createId('fighter'),
      email: email.toLowerCase(),
      displayName,
      passwordHash: await hashSecret(password),
    };

    this.store.write(STORAGE_KEYS.accounts, [...accounts, account]);
    this.persistSession({
      id: account.id,
      email: account.email,
      displayName: account.displayName,
      source: 'local',
    });
    return true;
  }

  async login(email: string, password: string): Promise<boolean> {
    if (this.backend.isOnline() && this.supabase.client) {
      const { data, error } = await this.supabase.client.auth.signInWithPassword({ email, password });

      if (!error && data.user) {
        this.persistSession({
          id: data.user.id,
          email: data.user.email ?? email,
          displayName: (data.user.user_metadata['display_name'] as string | undefined) ?? email,
          source: 'supabase',
        });
        return true;
      }
    }

    const accounts = this.store.read<LocalAccount[]>(STORAGE_KEYS.accounts, []);
    const match = accounts.find((account) => account.email === email.toLowerCase());
    if (!match || match.passwordHash !== (await hashSecret(password))) {
      await this.notify.error('Sign in failed', 'Those credentials do not match a pass.');
      return false;
    }

    this.persistSession({
      id: match.id,
      email: match.email,
      displayName: match.displayName,
      source: 'local',
    });
    return true;
  }

  async logout(): Promise<void> {
    if (this.session()?.source === 'supabase' && this.supabase.client) {
      await this.supabase.client.auth.signOut();
    }

    this.session.set(null);
    this.store.remove(STORAGE_KEYS.session);
  }

  private persistSession(session: UserSession): void {
    this.session.set(session);
    this.store.write(STORAGE_KEYS.session, session);
  }
}
