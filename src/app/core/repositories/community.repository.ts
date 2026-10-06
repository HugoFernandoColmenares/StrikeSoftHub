import { Injectable, inject, signal } from '@angular/core';
import { STORAGE_KEYS } from '../config/storage-keys';
import { CLAN_POST_SEED, EVENT_SEED } from '../data/community.seed';
import { BattleEventModel } from '../models/battle-event.model';
import { ClanPostModel } from '../models/clan-post.model';
import { BackendStatusService } from '../services/backend-status.service';
import { LocalStoreService } from '../services/local-store.service';
import { SupabaseClientService } from '../services/supabase-client.service';

@Injectable({ providedIn: 'root' })
export class CommunityRepository {
  private readonly store = inject(LocalStoreService);
  private readonly backend = inject(BackendStatusService);
  private readonly supabase = inject(SupabaseClientService);
  private readonly events = signal<BattleEventModel[]>(this.store.read(STORAGE_KEYS.events, EVENT_SEED));
  private readonly posts = signal<ClanPostModel[]>(this.store.read(STORAGE_KEYS.clanPosts, CLAN_POST_SEED));

  readonly eventFeed = this.events.asReadonly();
  readonly clanBoard = this.posts.asReadonly();
  private readonly hydrated = signal(false);
  private inflight: Promise<void> | null = null;
  readonly ready = this.hydrated.asReadonly();

  async load(): Promise<void> {
    if (this.hydrated()) {
      return;
    }

    if (this.inflight) {
      return this.inflight;
    }

    this.inflight = this.refresh().finally(() => {
      this.inflight = null;
    });

    return this.inflight;
  }

  private async refresh(): Promise<void> {
    if (this.backend.isOnline() && this.supabase.client) {
      const [eventResult, postResult] = await Promise.all([
        this.supabase.client.from('battle_events').select('*').order('event_date'),
        this.supabase.client.from('clan_posts').select('*').order('created_at', { ascending: false }),
      ]);

      if (!eventResult.error && eventResult.data?.length) {
        const mapped = eventResult.data.map((row) => ({
          id: row['id'] as string,
          title: row['title'] as string,
          location: row['location'] as string,
          date: row['event_date'] as string,
          ruleset: row['ruleset'] as string,
          description: row['description'] as string,
          isProvisional: (row['is_provisional'] as boolean | null) ?? false,
        }));
        this.events.set(mapped);
        this.store.write(STORAGE_KEYS.events, mapped);
      }

      if (!postResult.error && postResult.data?.length) {
        const mapped = postResult.data.map((row) => ({
          id: row['id'] as string,
          title: row['title'] as string,
          clanName: row['clan_name'] as string,
          body: row['body'] as string,
          authorName: row['author_name'] as string,
          createdAt: row['created_at'] as string,
          isSample: (row['is_sample'] as boolean | null) ?? false,
        }));
        this.posts.set(mapped);
        this.store.write(STORAGE_KEYS.clanPosts, mapped);
      }

      if (eventResult.data?.length || postResult.data?.length) {
        this.hydrated.set(true);
        return;
      }
    }

    if (!this.events().length) {
      this.events.set(EVENT_SEED);
      this.store.write(STORAGE_KEYS.events, EVENT_SEED);
    }

    if (!this.posts().length) {
      this.posts.set(CLAN_POST_SEED);
      this.store.write(STORAGE_KEYS.clanPosts, CLAN_POST_SEED);
    }

    this.hydrated.set(true);
  }
}
