import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transactions-header',
  templateUrl: './transactions-header.component.html',
  styleUrls: ['./transactions-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsHeaderComponent implements OnChanges {
  @Input() availableSelections: string[] = [];

  @Output() onRequestsToggle: EventEmitter<void> = new EventEmitter();
  @Output() onSearchTransactions: EventEmitter<string> = new EventEmitter();
  @Output() onSearchUpdate: EventEmitter<string> = new EventEmitter();

  searchControl = new FormControl('');

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  togglePendingRequests(): void {
    this.onRequestsToggle.emit();
  }

  itemSelected(item: string): void {
    this.onSearchTransactions.emit(item);
  }

  searchChanged(search: string): void {
    this.onSearchUpdate.emit(search);
  }
}
