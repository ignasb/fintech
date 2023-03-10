import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input()
  title: string = '';

  @Input()
  count?: number = 0;

  @Input()
  isDisabled?: boolean = false;

  @Input()
  size?: string = '';

  @Output() clicked: EventEmitter<void> = new EventEmitter();

  onClick(): void {
    this.clicked.emit();
  }
}
