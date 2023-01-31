import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { UserModel } from 'src/app/shared/models';
import { AppActions, UserActions } from '../actions';
import { IAppState } from '../reducers';

@Injectable()
export class SessionStorageEffects {
  loginSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(UserActions.loginSuccess),
        tap(({ user }) => {
          this.setUser(user);
        })
      );
    },
    { dispatch: false }
  );

  tryLoadUser$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AppActions.loadUserFromSession),
        tap(() => {
          this.tryLoadUser();
        })
      );
    },
    { dispatch: false }
  );

  private STORAGE_KEY = 'USER';

  constructor(private actions$: Actions, private store$: Store<IAppState>) {}

  setUser(user: UserModel.IUser): void {
    sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
  }

  tryLoadUser(): void {
    const userStr = sessionStorage.getItem(this.STORAGE_KEY);

    if (userStr) {
      const user = JSON.parse(userStr);
      this.store$.dispatch(UserActions.loginSuccess({ user }));
    }
  }
}
