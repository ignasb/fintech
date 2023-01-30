import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { UserSelectors } from './selectors/user.selectors';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';

@NgModule({
  declarations: [],
  providers: [UserSelectors],
  imports: [
    CommonModule,
    StoreModule.forFeature('appState', reducers),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class AppStoreModule {}
