import { createAction, props } from '@ngrx/store';
import { TransactionsModel } from 'src/app/shared/models';

export const getTransactions = createAction(
  '[TRANSACTIONS] GET_TRANSACTIONS',
  props<{ query: string }>()
);
export const getTransactionsSuccess = createAction(
  '[TRANSACTIONS] GET_TRANSACTIONS_SUCCESS',
  props<{ transactions: TransactionsModel.ITransaction[] }>()
);
export const getTransactionsFail = createAction(
  '[TRANSACTIONS] GET_TRANSACTIONS_FAIL',
  props<{ error: string }>()
);
