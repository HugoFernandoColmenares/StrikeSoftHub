import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { routes } from '../../../app.routes';
import { CodexPageComponent } from '../../../features/codex/codex-page.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import {
  CODEX_DOCUMENTS,
  CODEX_PAGES,
  countPendingMarks,
  countProposals,
  formatBytes,
  sectionsFor,
  sectionTexts,
} from './codex';
import { countPending, isProposal, parseInline } from './codex-inline';
import { LIBRO_SECTIONS } from './libro.data';
import { MANUAL_SECTIONS } from './manual.data';

describe('codex inline markup', () => {
  it('splits emphasis, crosses, pending data and gaps', () => {
    const kinds = parseInline('Uno *dos* **tres** † {{Pendiente de consultar}} [†] […]').map(
      (segment) => segment.kind,
    );
    expect(kinds).toEqual([
      'text',
      'em',
      'text',
      'strong',
      'text',
      'cross',
      'text',
      'pending',
      'text',
      'glyph',
      'text',
      'gap',
    ]);
  });

  it('treats only the live cross as a proposal', () => {
    expect(isProposal('Regla nueva †')).toBe(true);
    expect(isProposal('La cruz [†] marca propuestas')).toBe(false);
    expect(countPending('{{a}} y {{b}}')).toBe(2);
  });

  it('leaves no stray markup in the rendered text', () => {
    const all = [...MANUAL_SECTIONS, ...LIBRO_SECTIONS].flatMap(sectionTexts);
    for (const text of all) {
      const visible = parseInline(text)
        .map((segment) => segment.text)
        .join('');
      expect(visible).not.toMatch(/\*\*|\{\{|\}\}/);
    }
  });
});

describe('codex pages', () => {
  it('resolves every section a page asks for, once', () => {
    for (const page of CODEX_PAGES) {
      const sections = sectionsFor(page);
      expect(sections.length).toBe(page.sectionIds.length);
    }
    const slugs = CODEX_PAGES.map((page) => page.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('routes every page', () => {
    const children = routes[0].children ?? [];
    for (const page of CODEX_PAGES) {
      expect(children.some((route) => route.path === page.slug)).toBe(true);
    }
  });

  it('shows every chapter of the manual except the glossary on the rules page, and the glossary apart', () => {
    const shown = CODEX_PAGES.filter((page) => page.source === 'manual').flatMap(
      (page) => page.sectionIds,
    );
    expect([...shown].sort()).toEqual(MANUAL_SECTIONS.map((section) => section.id).sort());
  });

  it('marks proposals in the manual and pending data in the book', () => {
    expect(countProposals(MANUAL_SECTIONS)).toBeGreaterThan(0);
    expect(countProposals(LIBRO_SECTIONS)).toBe(0);
    expect(countPendingMarks(LIBRO_SECTIONS)).toBe(13);
    expect(countPendingMarks(MANUAL_SECTIONS)).toBe(0);
  });
});

describe('codex downloads', () => {
  it('points at the PDFs in public/docs with their size', () => {
    expect(CODEX_DOCUMENTS.manual.href).toBe('docs/manual-de-arbitraje-armagedon.pdf');
    expect(CODEX_DOCUMENTS.libro.href).toBe('docs/libro-del-grupo-armagedon.pdf');
    expect(formatBytes(CODEX_DOCUMENTS.manual.bytes)).toBe('2,6 MB');
    expect(formatBytes(CODEX_DOCUMENTS.libro.bytes)).toBe('3,3 MB');
  });

  it('renders both download links on the join page', async () => {
    // jsdom has no IntersectionObserver; the accent-zone directive only needs observe/disconnect.
    globalThis.IntersectionObserver ??= class {
      observe(): void {}
      unobserve(): void {}
      disconnect(): void {}
    } as unknown as typeof IntersectionObserver;
    await TestBed.configureTestingModule({
      imports: [CodexPageComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: { data: of({ slug: 'unete' }), snapshot: { data: { slug: 'unete' } } },
        },
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(CodexPageComponent);
    await fixture.whenStable();
    const links = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLAnchorElement>('a[download]'),
    ).map((link) => link.getAttribute('href'));
    expect(links).toEqual([CODEX_DOCUMENTS.manual.href, CODEX_DOCUMENTS.libro.href]);
  });
});
