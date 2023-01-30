import { createReducer, on } from '@ngrx/store';
import { TransactionsModel } from 'src/app/core/models';
import { TransactionsActions } from '../actions';

export interface ITransactionsState {
  data: TransactionsModel.ITransaction[];
  isLoading: boolean;
}

const initialState: ITransactionsState = {
  data: [] as TransactionsModel.ITransaction[],
  isLoading: false,
};

export const transactionsReducer = createReducer<ITransactionsState>(
  initialState,
  on(TransactionsActions.getTransactions, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(TransactionsActions.getTransactionsSuccess, (state, { transactions }) => ({
    ...state,
    isLoading: false,
    data: [...transactions],
    error: '',
  })),
  on(TransactionsActions.getTransactionsFail, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);
