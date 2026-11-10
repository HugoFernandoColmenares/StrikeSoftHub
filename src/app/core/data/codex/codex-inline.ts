import { InlineSegment } from '../../models/codex.model';

const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*|\{\{[^}]+\}\}|\[†\]|\[…\]|†)/g;

/** Splits codex markup into typed segments. Pure, so templates render it through a pure pipe. */
export function parseInline(text: string): InlineSegment[] {
  const segments: InlineSegment[] = [];
  for (const part of text.split(TOKEN)) {
    if (!part) {
      continue;
    }
    if (part === '†') {
      segments.push({ kind: 'cross', text: '†' });
    } else if (part === '[†]') {
      segments.push({ kind: 'glyph', text: '†' });
    } else if (part === '[…]') {
      segments.push({ kind: 'gap', text: '[…]' });
    } else if (part.startsWith('**')) {
      segments.push({ kind: 'strong', text: part.slice(2, -2) });
    } else if (part.startsWith('{{')) {
      segments.push({ kind: 'pending', text: part.slice(2, -2) });
    } else if (part.startsWith('*')) {
      segments.push({ kind: 'em', text: part.slice(1, -1) });
    } else {
      segments.push({ kind: 'text', text: part });
    }
  }
  return segments;
}

/** A provision proposed by this redaction: it carries the cross as a rule mark, not as a citation. */
export function isProposal(text: string): boolean {
  return parseInline(text).some((segment) => segment.kind === 'cross');
}

export function countPending(text: string): number {
  return parseInline(text).filter((segment) => segment.kind === 'pending').length;
}

export function isIncomplete(text: string): boolean {
  return text.includes('[…]');
}
