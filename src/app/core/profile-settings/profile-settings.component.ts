import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from 'src/app/store/actions';
import { IAppState } from 'src/app/store/reducers';
import { UserSelectors } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileSettingsComponent implements OnInit {
  user$ = this.userSelectors.getUser$;
  isUserLoading$ = this.userSelectors.isUserLoading$;

  constructor(
    private store$: Store<IAppState>,
    private userSelectors: UserSelectors
  ) {}

  ngOnInit(): void {
    this.store$.dispatch(UserActions.getProfile());
  }
}
