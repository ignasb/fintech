import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() name?: string;
  @Input() value!: string;
  @Input() isDebounced: boolean = false;
  @Input() placeholder: string = '';
  @Input() icon: string = '';

  @Output() inputChanged: EventEmitter<string> = new EventEmitter();

  onInputChanged(text: string): void {
    this.inputChanged.emit(text);
  }
}
