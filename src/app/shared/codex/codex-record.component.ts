import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CODEX_COPY } from '../../core/copy/codex.copy';

/** Anexo B: the printable combat record, drawn as an empty form. */
@Component({
  selector: 'app-codex-record',
  template: `
    @let r = copy.record;
    <section class="record" [attr.aria-label]="r.title">
      <header>
        <p class="title">{{ r.title }}</p>
        <p class="label">{{ r.subtitle }}</p>
      </header>
      <dl class="fields">
        @for (pair of r.fields; track $index) {
          @for (field of pair; track $index) {
            <div>
              <dt>{{ field }}</dt>
              <dd></dd>
            </div>
          }
        }
      </dl>
      <div class="wrap" tabindex="0" role="region" [attr.aria-label]="r.subtitle">
        <table>
          <thead>
            <tr>
              @for (cell of r.duelHead; track $index) {
                <th scope="col">{{ cell }}</th>
              }
            </tr>
          </thead>
          <tbody>
            @for (row of r.duelRows; track row) {
              <tr>
                <th scope="row">{{ row }}</th>
                @for (cell of r.duelHead.slice(1); track $index) {
                  <td></td>
                }
              </tr>
            }
          </tbody>
        </table>
      </div>
      <div class="calls">
        @for (call of r.calls; track call) {
          <p>{{ call }}</p>
        }
      </div>
      <div class="calls">
        <div>
          <p class="label">{{ r.resultTitle }}</p>
          <p>{{ r.result }}</p>
        </div>
        <div>
          <p class="label">{{ r.signaturesTitle }}</p>
          @for (who of r.signatures; track who) {
            <p>{{ who }}: ______________</p>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .record {
      display: grid;
      gap: var(--step-2);
      max-width: 88rem;
      padding: var(--step-3);
      border: var(--border-panel);
      background: var(--bg-elevated);
      box-shadow: var(--shadow-metal);
    }
    .title {
      font-family: var(--font-display);
      font-size: var(--text-h3);
      font-weight: 700;
    }
    .fields {
      display: grid;
      gap: var(--step-1) var(--step-3);
      margin: 0;
    }
    .fields div {
      display: grid;
      grid-template-columns: minmax(12rem, auto) 1fr;
      gap: var(--step-1);
      align-items: end;
    }
    dt {
      color: var(--fg-dim);
      font-size: var(--text-small);
    }
    dd {
      margin: 0;
      min-height: 2.4rem;
      border-block-end: 0.1rem solid var(--border-strong);
    }
    .wrap {
      overflow-x: auto;
    }
    table {
      width: 100%;
      min-width: 52rem;
      border-collapse: collapse;
      font-size: var(--text-small);
    }
    th,
    td {
      padding: var(--step-1);
      border: 0.1rem solid var(--border-strong);
      text-align: start;
    }
    td {
      height: 4rem;
    }
    .calls {
      display: grid;
      gap: var(--step-2);
      color: var(--color-text-soft);
      font-size: var(--text-small);
    }
    .calls > p {
      min-height: 6rem;
      padding: var(--step-1);
      border: 0.1rem dashed var(--border-strong);
    }
    @media (min-width: 76.8rem) {
      .fields,
      .calls {
        grid-template-columns: 1fr 1fr;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexRecordComponent {
  readonly copy = CODEX_COPY;
}
