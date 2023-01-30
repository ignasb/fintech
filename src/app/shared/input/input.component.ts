import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnChanges, OnInit {
  @Input()
  name?: string;
  @Input()
  value: string = '';
  @Input()
  isDebounced: boolean = false;
  @Input()
  placeholder: string = '';
  @Input()
  icon: string = '';
  @Input()
  availableSelections: string[] = [];

  @Output() inputChanged: EventEmitter<string> = new EventEmitter();
  @Output() itemSelected: EventEmitter<string> = new EventEmitter();

  inputControl = new FormControl('');
  isDropdownVisible = false;

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isDropdownVisible = false;
    }
  }

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    const { value } = changes;
    if (value && value.currentValue) {
      this.inputControl.setValue(value.currentValue);
    }
  }

  onInputChanged(text: string): void {
    this.inputChanged.emit(text);
  }

  onItemSelect(event: MouseEvent, item: string): void {
    this.inputControl.setValue(item);
    this.itemSelected.emit(item);
  }

  onInputClick(): void {
    const { availableSelections } = this;
    // this.isDropdownVisible =
    // availableSelections && availableSelections.length > 0;
    this.isDropdownVisible = true;
    console.log(this.isDropdownVisible);
  }

  onInputFocusOut(): void {
    // blur event trigger on focus out & hiding "li" elements ignores click handler.
    setTimeout(() => {
      this.isDropdownVisible = false;
    }, 0);
  }
}
