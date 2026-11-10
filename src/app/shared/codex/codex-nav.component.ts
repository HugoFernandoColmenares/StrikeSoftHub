import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CODEX_PAGES } from '../../core/data/codex/codex-pages';
import { CODEX_COPY } from '../../core/copy/codex.copy';

/** Tabs that join the pages taken from the Compañía's two books. */
@Component({
  selector: 'app-codex-nav',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="tabs" [attr.aria-label]="copy.subnavAria">
      @for (page of pages; track page.slug) {
        <a
          [routerLink]="['/', page.slug]"
          routerLinkActive="is-active"
          ariaCurrentWhenActive="page"
          class="tab"
          >{{ page.navLabel }}</a
        >
      }
    </nav>
  `,
  styles: `
    .tabs {
      display: flex;
      gap: 0.4rem;
      overflow-x: auto;
      padding-block-end: 0.4rem;
      border-block-end: 0.1rem solid var(--border-strong);
      scrollbar-width: thin;
    }
    .tab {
      display: inline-flex;
      align-items: center;
      flex: none;
      min-height: var(--touch);
      padding-inline: 1.2rem;
      border-block-end: 0.2rem solid transparent;
      color: var(--fg-dim);
      font-family: var(--font-display);
      font-size: var(--text-small);
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      transition:
        color var(--transition-fast),
        border-color var(--transition-fast);
    }
    .tab:hover {
      color: var(--highlight);
    }
    .tab.is-active {
      color: var(--fg);
      border-block-end-color: var(--color-main-hot);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexNavComponent {
  readonly pages = CODEX_PAGES;
  readonly copy = CODEX_COPY;
}
