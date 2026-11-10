import { CodexDocument, CodexPage, CodexSection, CodexSourceId } from '../../models/codex.model';
import { CODEX_PAGES } from './codex-pages';
import { countPending, isProposal } from './codex-inline';
import { LIBRO_NOTICE, LIBRO_SECTIONS } from './libro.data';
import { MANUAL_NOTICE, MANUAL_SECTIONS } from './manual.data';

/** The two PDFs written for the Compañía, served from `public/docs/`. */
export const CODEX_DOCUMENTS: Record<CodexSourceId, CodexDocument> = {
  manual: {
    id: 'manual',
    title: 'Manual de Arbitraje',
    subtitle:
      'Ordenanzas del duelo de softcombat para torneos y demostraciones en vivo de la Compañía Armagedón',
    tagline:
      'Reglas claras de armas, zonas, puntos, desarmes, faltas y señales, escritas para que el participante y el público entiendan el juicio de las armas sin ambigüedad: este es un juego de ser zorros, no de ser burros.',
    edition: 'Primera redacción, sujeta a emendación · Año MMXXVI',
    pages: 19,
    href: 'docs/manual-de-arbitraje-armagedon.pdf',
    bytes: 2_737_589,
  },
  libro: {
    id: 'libro',
    title: 'Libro del Grupo Armagedón',
    subtitle:
      'Tratado del arte del softcombat, la escuela del maestro Fioré y las cuatro casas de la Compañía',
    tagline:
      'Aquí se recogen los dos caminos de este arte —el juego y el estudio histórico—, las armas y su forja, la historia de esta Compañía en borrador y los ejercicios con que se forja la mano y el juicio del esgrimidor.',
    edition: 'Primera redacción, sujeta a emendación · Año MMXXVI',
    pages: 30,
    href: 'docs/libro-del-grupo-armagedon.pdf',
    bytes: 3_456_279,
  },
};

export const CODEX_NOTICES: Record<CodexSourceId, string> = {
  manual: MANUAL_NOTICE,
  libro: LIBRO_NOTICE,
};

const SECTIONS: Record<CodexSourceId, readonly CodexSection[]> = {
  manual: MANUAL_SECTIONS,
  libro: LIBRO_SECTIONS,
};

export { CODEX_PAGES } from './codex-pages';

export function findCodexPage(slug: string): CodexPage | undefined {
  return CODEX_PAGES.find((page) => page.slug === slug);
}

export function sectionsFor(page: CodexPage): CodexSection[] {
  const pool = SECTIONS[page.source];
  return page.sectionIds.map((id) => {
    const section = pool.find((candidate) => candidate.id === id);
    if (!section) {
      throw new Error(`Codex section "${id}" is missing from ${page.source}`);
    }
    return section;
  });
}

/** Every string a section shows, so counts and tests read the same text the page renders. */
export function sectionTexts(section: CodexSection): string[] {
  return section.blocks.flatMap((block) => {
    switch (block.type) {
      case 'p':
      case 'h':
      case 'house':
      case 'note':
        return [block.text];
      case 'list':
        return [block.lead ?? '', ...block.items.map((item) => `${item.title ?? ''} ${item.text}`)];
      case 'table':
        return [...block.rows.map((row) => row.join(' ')), block.caption ?? ''];
      case 'figure':
        return [block.caption];
      case 'glossary':
        return block.entries.map((entry) => `${entry.term} ${entry.definition}`);
      case 'pending':
        return [block.intro, ...block.items];
      case 'record':
        return [];
    }
  });
}

/** Paragraphs, list items and table rows that carry the cross: provisions pending approval. */
export function countProposals(sections: readonly CodexSection[]): number {
  return sections.flatMap(sectionTexts).filter(isProposal).length;
}

/** Inline data marked as pending, plus each line of the founders' pending table. */
export function countPendingMarks(sections: readonly CodexSection[]): number {
  return sections.reduce(
    (total, section) =>
      total +
      section.blocks.reduce(
        (sum, block) => sum + (block.type === 'pending' ? block.items.length : 0),
        0,
      ) +
      sectionTexts(section).reduce((sum, text) => sum + countPending(text), 0),
    0,
  );
}

export function formatBytes(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return `${mb.toLocaleString('es-CO', { maximumFractionDigits: 1, minimumFractionDigits: 1 })} MB`;
}
