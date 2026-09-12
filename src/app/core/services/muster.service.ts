import { Injectable, computed, signal } from '@angular/core';
import { MUSTER_DURATION_HOURS, MUSTER_UTC_HOUR } from '../config/group';
import { Countdown } from '../models/countdown.model';

/** Tracks the group's recurring Sunday muster and the time left until it starts. */
@Injectable({ providedIn: 'root' })
export class MusterService {
  private readonly now = signal(Date.now());

  readonly nextMuster = computed(() => nextMusterFrom(new Date(this.now())));

  readonly isLive = computed(() => {
    const start = startOfCurrentMuster(new Date(this.now()));
    if (!start) {
      return false;
    }

    return this.now() < start.getTime() + MUSTER_DURATION_HOURS * 3_600_000;
  });

  readonly countdown = computed<Countdown>(() => {
    const remaining = Math.max(0, this.nextMuster().getTime() - this.now());
    const totalSeconds = Math.floor(remaining / 1000);

    return {
      days: pad(Math.floor(totalSeconds / 86_400)),
      hours: pad(Math.floor((totalSeconds % 86_400) / 3600)),
      minutes: pad(Math.floor((totalSeconds % 3600) / 60)),
      seconds: pad(totalSeconds % 60),
    };
  });

  constructor() {
    setInterval(() => this.now.set(Date.now()), 1000);
  }
}

function pad(value: number): string {
  return value.toString().padStart(2, '0');
}

function startOfCurrentMuster(from: Date): Date | null {
  if (from.getUTCDay() !== 0) {
    return null;
  }

  const start = new Date(
    Date.UTC(from.getUTCFullYear(), from.getUTCMonth(), from.getUTCDate(), MUSTER_UTC_HOUR),
  );

  return from.getTime() >= start.getTime() ? start : null;
}

export function nextMusterFrom(from: Date): Date {
  const candidate = new Date(
    Date.UTC(from.getUTCFullYear(), from.getUTCMonth(), from.getUTCDate(), MUSTER_UTC_HOUR),
  );

  let daysAhead = (7 - candidate.getUTCDay()) % 7;
  if (daysAhead === 0 && candidate.getTime() <= from.getTime()) {
    daysAhead = 7;
  }

  candidate.setUTCDate(candidate.getUTCDate() + daysAhead);
  return candidate;
}
