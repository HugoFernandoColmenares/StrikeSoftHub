import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lore',
  template: `
    <article class="lore">
      <h1>Lore of the Forge</h1>
      <p>
        Softcombat is a sport of timing, weight, and nerve. StrikeSoft builds foam-cored weapons that
        read like steel in the hand without turning a friendly bout into a hospital visit.
      </p>
      <p>
        The forge charcoal halls hold the catalog. The arena keeps the calendar. Between them sits the
        same rule: if it cannot survive a muddy weekend, it does not ship.
      </p>
      <blockquote>
        Every fighter remembers the first weapon that felt honest. That is the only myth we sell.
      </blockquote>
    </article>
  `,
  styles: `
    .lore {
      display: grid;
      gap: 1rem;
      max-width: 44rem;
    }

    h1 {
      margin: 0;
      font-family: var(--font-display);
      font-size: clamp(2rem, 6vw, 3rem);
    }

    p,
    blockquote {
      color: var(--color-chain);
    }

    blockquote {
      margin: 0;
      padding: 1rem 1.25rem;
      background: var(--color-armor);
      border-left: 0.25rem solid var(--color-gold);
      color: var(--color-blade);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoreComponent {}
