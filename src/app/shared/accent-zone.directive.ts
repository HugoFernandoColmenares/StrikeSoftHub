import { DOCUMENT, Directive, ElementRef, OnDestroy, effect, inject, input } from '@angular/core';

/**
 * Retunes the page-wide `--section-accent` while the host section owns the viewport.
 * Registered as an @property, so the whole chrome cross-fades between accents.
 */
@Directive({
  selector: '[appAccentZone]',
})
export class AccentZoneDirective implements OnDestroy {
  readonly appAccentZone = input.required<string>();

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly document = inject(DOCUMENT);
  private observer?: IntersectionObserver;

  constructor() {
    effect(() => {
      const accent = this.appAccentZone();
      this.observer?.disconnect();
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.document.documentElement.style.setProperty('--section-accent', accent);
            }
          }
        },
        { rootMargin: '-45% 0px -45% 0px' },
      );
      this.observer.observe(this.host.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
