/** Inline markup used by the codex data: see `core/data/codex/*.data.ts`. */
export type CodexNotice = string;

export interface CodexListItem {
  title?: string;
  text: string;
}

export type CodexBlock =
  | { type: 'p'; text: string }
  | { type: 'h'; text: string }
  | { type: 'house'; text: string }
  | { type: 'note'; text: string }
  | { type: 'list'; lead?: string; items: readonly CodexListItem[] }
  | {
      type: 'table';
      head: readonly string[];
      rows: readonly (readonly string[])[];
      caption?: string;
    }
  | { type: 'figure'; src: string; width: number; height: number; alt: string; caption: string }
  | { type: 'glossary'; entries: readonly { term: string; definition: string }[] }
  | { type: 'pending'; title: string; intro: string; items: readonly string[] }
  | { type: 'record' };

export interface CodexSection {
  id: string;
  /** "Capítulo IV", "Anexo A", "Prólogo"… */
  kicker: string;
  title: string;
  blocks: readonly CodexBlock[];
}

export type CodexSourceId = 'manual' | 'libro';

export interface CodexDocument {
  id: CodexSourceId;
  title: string;
  subtitle: string;
  tagline: string;
  edition: string;
  pages: number;
  href: string;
  bytes: number;
}

export interface CodexPage {
  slug: string;
  navLabel: string;
  title: string;
  lede: string;
  source: CodexSourceId;
  sectionIds: readonly string[];
  /** Show the source notice (aviso al lector) above the content. */
  notice?: boolean;
  /** Show the in-page index of sections. */
  index?: boolean;
  /** The join page adds the muster facts and the downloads shelf. */
  join?: boolean;
}

export type InlineKind = 'text' | 'em' | 'strong' | 'pending' | 'cross' | 'glyph' | 'gap';

export interface InlineSegment {
  kind: InlineKind;
  text: string;
}
