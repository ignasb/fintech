import { Injectable } from '@angular/core';
import {
  createFeatureSelector,
  createSelector,
  select,
  Store,
} from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { TransactionsModel } from 'src/app/shared/models';
import { IAppState } from '../reducers';

const getAppState = createFeatureSelector<IAppState>('appState');

const getTransactionsState = createSelector(
  getAppState,
  (state) => state.transactions
);

@Injectable()
export class TransactionsSelectors {
  getTransactions$ = this.store$.pipe(select(getTransactionsState));
  getTransactionsRows$ = this.getTransactions$.pipe(
    map(({ data }) => this.transformTransactionsToRows(data))
  );
  getTransactionsOverview$ = this.getTransactions$.pipe(
    map(({ data }) => this.aggregateTransactions(data))
  );

  constructor(private store$: Store<IAppState>) {}

  transformTransactionsToRows(
    transactions: TransactionsModel.ITransaction[]
  ): TransactionsModel.TransactionTableRow[] {
    return transactions.map((t) => {
      return [
        t.date,
        [t.logo, t.companyName, [...t.tags]],
        [t.receipt, t.message],
        t.amount,
      ];
    });
  }

  aggregateTransactions(
    transactions: TransactionsModel.ITransaction[]
  ): TransactionsModel.ITransactionOverview {
    return transactions.reduce(
      (acc, { amount, cashback }, idx) => {
        return {
          count: idx + 1,
          amount: amount + acc.amount,
          cashback: cashback + acc.cashback,
        };
      },
      { count: 0, amount: 0, cashback: 0 }
    );
  }
}
