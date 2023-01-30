import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { UserActions } from '../actions';

@Injectable()
export class RouterEffects {
  navigateToTransactions$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(UserActions.loginSuccess),
        tap(() => this.navigateToTransactions())
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {}

  navigateToTransactions(): void {
    this.router.navigate(['transactions']);
  }
}
