import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions-shell',
  templateUrl: './transactions-shell.component.html',
  styleUrls: ['./transactions-shell.component.scss'],
})
export class TransactionsShellComponent {
  isPendingRequestsVisible: boolean = true;

  public toggleRequestSidebar(): void {
    this.isPendingRequestsVisible = !this.isPendingRequestsVisible;
  }
}
