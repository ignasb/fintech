import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { UserSelectors } from './selectors/user.selectors';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';
import { RouterEffects } from './effects/router.effects';
import { SessionStorageEffects } from './effects/session.effects';
import { TransactionsEffects } from './effects/transactions.effects';

@NgModule({
  declarations: [],
  providers: [UserSelectors],
  imports: [
    CommonModule,
    StoreModule.forFeature('appState', reducers),
    EffectsModule.forFeature([
      UserEffects,
      RouterEffects,
      SessionStorageEffects,
      TransactionsEffects,
    ]),
  ],
})
export class AppStoreModule {}
