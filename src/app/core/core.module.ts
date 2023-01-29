import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';
import { LinkComponent } from './sidebar/link/link.component';
import { SharedModule } from '../shared/shared.module';
import { SettingsComponent } from './sidebar/settings/settings.component';
import { RouterModule, Routes } from '@angular/router';
import { OverlayComponent } from './overlay/overlay.component';
import { ProfileComponent } from '../shared/profile/profile.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileSettingsFormComponent } from './profile-settings/profile-settings-form/profile-settings-form.component';

const routes: Routes = [
  {
    path: 'settings',
    component: OverlayComponent,
    children: [
      { path: 'profile', component: ProfileSettingsComponent },
      { path: 'account', component: SettingsComponent },
    ],
  },
];
@NgModule({
  declarations: [
    SidebarComponent,
    MainComponent,
    LayoutComponent,
    LinkComponent,
    SettingsComponent,
    OverlayComponent,
    ProfileSettingsComponent,
    ProfileSettingsFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [LayoutComponent],
})
export class CoreModule {}
