import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';
import { UserActions } from '../actions';

@Injectable()
export class UserEffects {
  public getUserProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.getProfile),
      switchMap(() =>
        this.userService.getDetails$().pipe(
          map((user) => UserActions.getProfileSuccess({ user })),
          catchError((error) => of(UserActions.getProfileFail())) // TODO: Implement error state & handling
        )
      )
    );
  });

  constructor(private actions$: Actions, private userService: UserService) {}
}
