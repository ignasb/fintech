import { Injectable } from '@angular/core';
import {
  createFeatureSelector,
  createSelector,
  select,
  Store,
} from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '../reducers';

const getAppState = createFeatureSelector<IAppState>('appState');

const getUserState = createSelector(getAppState, (state) => state.user.data);
const getIsUserLoading = createSelector(
  getAppState,
  (state) => state.user.isLoading
);

@Injectable()
export class UserSelectors {
  getUser$ = this.store$.pipe(select(getUserState));
  isUserLoading$ = this.store$.pipe(select(getIsUserLoading));

  constructor(private store$: Store<IAppState>) {}
}
