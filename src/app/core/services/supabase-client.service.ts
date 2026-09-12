import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SupabaseClientService {
  readonly client: SupabaseClient | null = this.create();

  get configured(): boolean {
    return this.client !== null;
  }

  private create(): SupabaseClient | null {
    const url = environment.supabaseUrl.trim();
    const key = environment.supabaseAnonKey.trim();

    if (!url || !key) {
      return null;
    }

    return createClient(url, key, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });
  }
}
