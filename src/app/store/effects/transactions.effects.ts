import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransactionsService } from 'src/app/core/services/transactions.service';
import { TransactionsActions } from '../actions';

@Injectable()
export class TransactionsEffects {
  getTransactions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TransactionsActions.getTransactions),
      switchMap(({ query }) =>
        this.transactionsService
          .getTransactions$(query)
          .pipe(
            map((transactions) =>
              TransactionsActions.getTransactionsSuccess({ transactions })
            )
          )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private transactionsService: TransactionsService
  ) {}
}
