import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
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

  @ViewChild('input')
  inputRef?: ElementRef;

  @Output() inputChanged: EventEmitter<string> = new EventEmitter();
  @Output() itemSelected: EventEmitter<string> = new EventEmitter();

  isDropdownVisible = false;

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isDropdownVisible = false;
    }
  }

  constructor(private elRef: ElementRef, private cd: ChangeDetectorRef) {}

  onInputChanged(text: string): void {
    console.log(text);
    this.inputChanged.emit(text);
  }

  onItemSelect(event: MouseEvent, item: string): void {
    if (this.inputRef) {
      this.inputRef.nativeElement.value = item;
    }
    this.itemSelected.emit(item);
    // this.cd.detectChanges();
    this.isDropdownVisible = false;
  }

  onInputClick(): void {
    this.isDropdownVisible = true;
  }
}
