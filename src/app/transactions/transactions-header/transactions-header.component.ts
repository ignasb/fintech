import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-transactions-header',
  templateUrl: './transactions-header.component.html',
  styleUrls: ['./transactions-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsHeaderComponent {
  @Output() onRequestsToggle: EventEmitter<void> = new EventEmitter();

  public togglePendingRequests(): void {
    this.onRequestsToggle.emit();
  }
}
