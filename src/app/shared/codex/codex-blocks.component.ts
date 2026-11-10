import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { isIncomplete, isProposal } from '../../core/data/codex/codex-inline';
import { CODEX_COPY } from '../../core/copy/codex.copy';
import { CodexBlock, CodexSection } from '../../core/models/codex.model';
import { CodexRecordComponent } from './codex-record.component';
import { CodexTextComponent } from './codex-text.component';

type Of<T extends CodexBlock['type']> = Extract<CodexBlock, { type: T }>;

/** Renders the blocks of one codex section. Data stays in `core/data/codex`, never in templates. */
@Component({
  selector: 'app-codex-blocks',
  imports: [CodexTextComponent, CodexRecordComponent],
  templateUrl: './codex-blocks.component.html',
  styleUrl: './codex-blocks.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexBlocksComponent {
  readonly section = input.required<CodexSection>();
  readonly copy = CODEX_COPY;
  readonly query = signal('');

  readonly isProposal = isProposal;
  readonly isIncomplete = isIncomplete;

  readonly glossary = computed(() => {
    const block = this.section().blocks.find((candidate) => candidate.type === 'glossary');
    const needle = normalize(this.query());
    const entries = block?.type === 'glossary' ? block.entries : [];
    return needle
      ? entries.filter((entry) => normalize(`${entry.term} ${entry.definition}`).includes(needle))
      : entries;
  });

  p(block: CodexBlock): Of<'p'> {
    return block as Of<'p'>;
  }
  list(block: CodexBlock): Of<'list'> {
    return block as Of<'list'>;
  }
  table(block: CodexBlock): Of<'table'> {
    return block as Of<'table'>;
  }
  figure(block: CodexBlock): Of<'figure'> {
    return block as Of<'figure'>;
  }
  pending(block: CodexBlock): Of<'pending'> {
    return block as Of<'pending'>;
  }
  text(block: CodexBlock): string {
    return 'text' in block ? block.text : '';
  }

  rowIsProposal(row: readonly string[]): boolean {
    return row.some((cell) => isProposal(cell));
  }

  onQuery(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }
}

function normalize(value: string): string {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim();
}
