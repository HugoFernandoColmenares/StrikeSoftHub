import { ChangeDetectionStrategy, Component } from '@angular/core';

interface EmberSpec {
  left: string;
  duration: string;
  delay: string;
  x: string;
  y: string;
  scale: string;
}

const EMBER_COUNT = 10;

function createEmbers(): EmberSpec[] {
  return Array.from({ length: EMBER_COUNT }, () => ({
    left: `${Math.random() * 100}%`,
    duration: `${4 + Math.random() * 6}s`,
    delay: `${Math.random() * 6}s`,
    x: `${-10 + Math.random() * 20}rem`,
    y: `${35 + Math.random() * 25}rem`,
    scale: `${0.5 + Math.random() * 1.5}`,
  }));
}

@Component({
  selector: 'app-ember-field',
  template: `
    <div class="embers" aria-hidden="true">
      @for (ember of embers; track $index) {
        <span
          class="ember"
          [style.left]="ember.left"
          [style.--ember-duration]="ember.duration"
          [style.--ember-delay]="ember.delay"
          [style.--ember-x]="ember.x"
          [style.--ember-y]="ember.y"
          [style.transform]="'scale(' + ember.scale + ')'"
        ></span>
      }
    </div>
  `,
  styles: `
    :host {
      position: absolute;
      inset: 0;
      z-index: 1;
      pointer-events: none;
      contain: strict;
    }

    .embers {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }

    .ember {
      position: absolute;
      bottom: -2rem;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: var(--color-main-hot);
      box-shadow:
        0 0 0.8rem var(--color-main),
        0 0 1.5rem var(--glow-main);
      animation: emberRise var(--ember-duration) linear var(--ember-delay) infinite;
      opacity: 0;
    }

    @keyframes emberRise {
      0% {
        opacity: 0;
        transform: translate3d(0, 0, 0) scale(0.65);
      }

      10% {
        opacity: 0.85;
      }

      65% {
        opacity: 0.75;
      }

      100% {
        opacity: 0;
        transform: translate3d(var(--ember-x), calc(var(--ember-y) * -1), 0) scale(0);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .embers {
        display: none;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmberFieldComponent {
  readonly embers = createEmbers();
}
