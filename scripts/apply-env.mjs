import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const envPath = resolve(root, '.env');
const outPath = resolve(root, 'src/environments/environment.secrets.ts');

const secrets = {
  supabaseUrl: '',
  supabaseAnonKey: '',
};

const keyMap = {
  NG_APP_SUPABASE_URL: 'supabaseUrl',
  NG_APP_SUPABASE_ANON_KEY: 'supabaseAnonKey',
};

if (existsSync(envPath)) {
  const lines = readFileSync(envPath, 'utf8').split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const separator = trimmed.indexOf('=');
    if (separator < 0) {
      continue;
    }

    const key = trimmed.slice(0, separator).trim();
    const field = keyMap[key];
    if (!field) {
      continue;
    }

    let value = trimmed.slice(separator + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    secrets[field] = value;
  }
}

const contents = `export const appSecrets = {
  supabaseUrl: ${JSON.stringify(secrets.supabaseUrl)},
  supabaseAnonKey: ${JSON.stringify(secrets.supabaseAnonKey)},
} as const;
`;

writeFileSync(outPath, contents);
