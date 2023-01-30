import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsShellComponent } from './transactions-shell/transactions-shell.component';
import { TransactionsDetailsComponent } from './transactions-details/transactions-details.component';
import { TransactionsRequestsComponent } from './transactions-requests/transactions-requests.component';
import { TransactionsOverviewComponent } from './transactions-overview/transactions-overview.component';
import { TransactionsHeaderComponent } from './transactions-header/transactions-header.component';
import { SharedModule } from '../shared/shared.module';
import { TransactionsTableComponent } from './transactions-table/transactions-table.component';
// import { FormatTransactionCellPipe } from './pipes/format-transaction-row.pipe';
import { TransactionsSelectors } from '../store/selectors/transactions.selectors';

@NgModule({
  declarations: [
    TransactionsShellComponent,
    TransactionsOverviewComponent,
    TransactionsDetailsComponent,
    TransactionsRequestsComponent,
    TransactionsHeaderComponent,
    TransactionsTableComponent,
    // FormatTransactionCellPipe,
  ],
  providers: [DatePipe, CurrencyPipe, TransactionsSelectors],
  imports: [CommonModule, TransactionsRoutingModule, SharedModule],
})
export class TransactionsModule {}
