import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GROUP } from '../../core/config/group';
import { CODEX_COPY } from '../../core/copy/codex.copy';
import {
  CODEX_DOCUMENTS,
  CODEX_NOTICES,
  CODEX_PAGES,
  countPendingMarks,
  countProposals,
  sectionsFor,
} from '../../core/data/codex/codex';
import { CodexSourceId } from '../../core/models/codex.model';
import { AccentZoneDirective } from '../../shared/accent-zone.directive';
import { CodexBlocksComponent } from '../../shared/codex/codex-blocks.component';
import { CodexDownloadComponent } from '../../shared/codex/codex-download.component';
import { CodexNavComponent } from '../../shared/codex/codex-nav.component';
import { CodexTextComponent } from '../../shared/codex/codex-text.component';
import { IconComponent } from '../../shared/icon/icon.component';

/** One page built from the Compañía's books. The route's `data.slug` picks the page. */
@Component({
  selector: 'app-codex-page',
  imports: [
    AccentZoneDirective,
    CodexBlocksComponent,
    CodexDownloadComponent,
    CodexNavComponent,
    CodexTextComponent,
    IconComponent,
  ],
  templateUrl: './codex-page.component.html',
  styleUrl: './codex-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexPageComponent {
  private readonly route = inject(ActivatedRoute);

  readonly copy = CODEX_COPY;
  readonly group = GROUP;
  readonly sources: readonly CodexSourceId[] = ['manual', 'libro'];
  readonly documents = CODEX_DOCUMENTS;

  private readonly slug = toSignal(this.route.data.pipe(map((data) => data['slug'] as string)), {
    initialValue: this.route.snapshot.data['slug'] as string,
  });

  readonly page = computed(
    () => CODEX_PAGES.find((candidate) => candidate.slug === this.slug()) ?? CODEX_PAGES[0],
  );
  readonly document = computed(() => CODEX_DOCUMENTS[this.page().source]);
  readonly notice = computed(() => CODEX_NOTICES[this.page().source]);
  readonly sections = computed(() => sectionsFor(this.page()));
  readonly proposals = computed(() => countProposals(this.sections()));
  readonly pending = computed(() => countPendingMarks(this.sections()));

  /** `<main>` scrolls instead of the body, so fragment links need an explicit scroll. */
  jump(id: string): void {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    target?.focus({ preventScroll: true });
  }
}
