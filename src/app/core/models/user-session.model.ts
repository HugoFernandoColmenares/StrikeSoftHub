export type AuthSource = 'supabase' | 'local';

export interface UserSession {
  id: string;
  email: string;
  displayName: string;
  source: AuthSource;
}

export interface LocalAccount {
  id: string;
  email: string;
  displayName: string;
  passwordHash: string;
}
