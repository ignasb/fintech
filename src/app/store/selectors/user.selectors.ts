import { Injectable } from '@angular/core';
import {
  createFeatureSelector,
  createSelector,
  select,
  Store,
} from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { UserModel } from 'src/app/core/models';
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
  isLoggedIn$ = this.getUser$.pipe(map(this.isUserDataEmpty));

  constructor(private store$: Store<IAppState>) {}

  isUserDataEmpty(user: UserModel.IUser): boolean {
    return Object.keys(user).length > 0;
  }
}
