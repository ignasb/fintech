import { ActionReducerMap } from '@ngrx/store';
import * as userReducers from './user.reducer';
import * as transactionsReducers from './transactions.reducer';

export interface ILoading {
  isLoading: boolean;
}

export interface IAppState {
  user: userReducers.IUserState;
  transactions: transactionsReducers.ITransactionsState;
}

export const reducers: ActionReducerMap<IAppState> = {
  user: userReducers.userReducer,
  transactions: transactionsReducers.transactionsReducer,
};
