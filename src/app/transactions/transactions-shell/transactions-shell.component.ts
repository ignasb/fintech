import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TransactionsService } from 'src/app/core/services/transactions.service';
import { TransactionsActions } from 'src/app/store/actions';
import { IAppState } from 'src/app/store/reducers';
import { TransactionsSelectors } from 'src/app/store/selectors/transactions.selectors';

@Component({
  selector: 'app-transactions-shell',
  templateUrl: './transactions-shell.component.html',
  styleUrls: ['./transactions-shell.component.scss'],
})
export class TransactionsShellComponent implements OnInit {
  isPendingRequestsVisible: boolean = false;
  availableSelections: string[] = [];
  transactionsRows$ = this.transactionsSelectors.getTransactionsRows$;
  transactionsOverview$ = this.transactionsSelectors.getTransactionsOverview$;

  constructor(
    private store$: Store<IAppState>,
    private transactionsSelectors: TransactionsSelectors,
    private transactionsService: TransactionsService
  ) {}

  ngOnInit(): void {
    this.store$.dispatch(TransactionsActions.getTransactions({ query: '' }));
    this.setAvailableSelections('');
  }

  setAvailableSelections(search: string): void {
    this.transactionsService
      .getAvailableSelections$(search)
      .subscribe((selections) => {
        this.availableSelections = selections;
      });
  }

  searchTransactions(query: string): void {
    this.store$.dispatch(TransactionsActions.getTransactions({ query }));
  }

  updateSuggestions(search: string): void {
    this.setAvailableSelections(search);

    if (!search) {
      this.searchTransactions('');
    }
  }

  toggleRequestSidebar(): void {
    this.isPendingRequestsVisible = !this.isPendingRequestsVisible;
  }
}
