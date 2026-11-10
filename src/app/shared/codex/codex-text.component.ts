import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { parseInline } from '../../core/data/codex/codex-inline';
import { CODEX_COPY } from '../../core/copy/codex.copy';

/** Renders one string of codex markup: cursive, bold, the cross, pending data and PDF gaps. */
@Component({
  selector: 'app-codex-text',
  template: `
    @for (segment of segments(); track $index) {
      @switch (segment.kind) {
        @case ('em') {
          <em>{{ segment.text }}</em>
        }
        @case ('strong') {
          <strong>{{ segment.text }}</strong>
        }
        @case ('cross') {
          <abbr class="cross" [title]="copy.crossTitle">†</abbr>
        }
        @case ('glyph') {
          <span class="cross">†</span>
        }
        @case ('pending') {
          <mark class="pending" [title]="copy.pendingBadge">{{ segment.text }}</mark>
        }
        @case ('gap') {
          <abbr class="gap" [title]="copy.gapTitle">[…]</abbr>
        }
        @default {
          {{ segment.text }}
        }
      }
    }
  `,
  styles: `
    :host {
      display: contents;
    }

    .cross {
      color: var(--color-proposal);
      font-weight: 700;
      text-decoration: none;
      cursor: help;
    }

    .pending {
      color: var(--color-pending);
      background: transparent;
      font-style: italic;
      text-decoration: underline dashed;
      text-underline-offset: 0.3em;
    }

    .gap {
      color: var(--fg-mute);
      text-decoration: none;
      cursor: help;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexTextComponent {
  readonly text = input.required<string>();
  readonly copy = CODEX_COPY;
  readonly segments = computed(() => parseInline(this.text()));
}
