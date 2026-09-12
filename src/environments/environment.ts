import { appSecrets } from './environment.secrets';

export const environment = {
  production: false,
  supabaseUrl: appSecrets.supabaseUrl,
  supabaseAnonKey: appSecrets.supabaseAnonKey,
};
