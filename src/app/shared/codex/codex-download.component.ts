import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CODEX_DOCUMENTS, formatBytes } from '../../core/data/codex/codex';
import { CODEX_COPY } from '../../core/copy/codex.copy';
import { CodexSourceId } from '../../core/models/codex.model';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-codex-download',
  imports: [IconComponent],
  template: `
    @let doc = document();
    <a
      class="btn-primary"
      [href]="doc.href"
      [attr.download]="fileName()"
      type="application/pdf"
      [attr.aria-label]="copy.downloadAria(doc.title, size())"
    >
      <app-icon name="download" [size]="2" />
      {{ label() || copy.download }}
      <span class="meta">{{ size() }}</span>
    </a>
  `,
  styles: `
    .meta {
      font-family: var(--font-body);
      font-size: var(--text-small);
      font-weight: 500;
      letter-spacing: 0;
      text-transform: none;
      opacity: 0.85;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexDownloadComponent {
  readonly source = input.required<CodexSourceId>();
  readonly label = input('');
  readonly copy = CODEX_COPY;
  readonly document = computed(() => CODEX_DOCUMENTS[this.source()]);
  readonly size = computed(() => formatBytes(this.document().bytes));
  readonly fileName = computed(() => this.document().href.split('/').pop() ?? '');
}
