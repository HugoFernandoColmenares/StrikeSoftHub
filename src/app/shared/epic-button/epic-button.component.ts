import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-epic-button',
  templateUrl: './epic-button.component.html',
  styleUrl: './epic-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpicButtonComponent {
  readonly label = input.required<string>();
  readonly type = input<'button' | 'submit'>('button');
  readonly variant = input<'crimson' | 'steel' | 'ghost'>('crimson');
  readonly disabled = input(false);
  readonly pressed = output<void>();
}
