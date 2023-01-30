import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppActions } from './store/actions';
import { IAppState } from './store/reducers';
import { UserSelectors } from './store/selectors/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'fintech';

  isLoggedIn: boolean = false;

  subscriptions = new Subscription();

  constructor(
    private userSelectors: UserSelectors,
    private store$: Store<IAppState>
  ) {}

  ngOnInit(): void {
    this.store$.dispatch(AppActions.loadUserFromSession());

    const loggedSub = this.userSelectors.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
    this.subscriptions.add(loggedSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
