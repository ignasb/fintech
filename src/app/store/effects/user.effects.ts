import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';
import { UserActions } from '../actions';

@Injectable()
export class UserEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.login),
      switchMap(({ credentials }) =>
        this.userService.login$(credentials).pipe(
          map((user) => UserActions.loginSuccess({ user })),
          catchError((error) => of(UserActions.loginFail({ error })))
        )
      )
    );
  });

  getUserProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.getProfile),
      switchMap(() =>
        this.userService.getProfile$().pipe(
          map((user) => UserActions.getProfileSuccess({ user })),
          catchError((error) => of(UserActions.getProfileFail({ error }))) // TODO: Implement error state & handling
        )
      )
    );
  });

  updateUserProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.updateProfile),
      switchMap(({ user }) =>
        this.userService.updateProfile$(user).pipe(
          map((user) => UserActions.updateProfileSuccess({ user })),
          catchError((error) => of(UserActions.updateProfileFail({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private userService: UserService) {}
}
