import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/shared/models';
import { UserActions } from 'src/app/store/actions';
import { IAppState } from 'src/app/store/reducers';
import { UserSelectors } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-login-shell',
  templateUrl: './login-shell.component.html',
  styleUrls: ['./login-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginShellComponent implements OnInit {
  isLoggingIn$!: Observable<boolean>;

  constructor(
    private store$: Store<IAppState>,
    private userSelectors: UserSelectors
  ) {}

  ngOnInit(): void {
    this.isLoggingIn$ = this.userSelectors.isUserLoading$;
  }

  login(credentials: UserModel.IUserLogin) {
    this.store$.dispatch(UserActions.login({ credentials }));
  }
}
