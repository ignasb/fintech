import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { LinkComponent } from './sidebar/link/link.component';
import { SharedModule } from '../shared/shared.module';
import { SettingsComponent } from './sidebar/settings/settings.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileSettingsFormComponent } from './profile-settings/profile-settings-form/profile-settings-form.component';
import { mockBackendProvider } from './interceptors/mock-backend-interceptor.interceptor';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileSettingsOverviewComponent } from './profile-settings/profile-settings-overview/profile-settings-overview.component';
import { TransactionsService } from './services/transactions.service';
import { ProfileSettingsComponent } from './profile-settings/profile-settings-shell/profile-settings-shell.component';
import { OverlayComponent } from './overlay/overlay.component';

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
    LayoutComponent,
    LinkComponent,
    SettingsComponent,
    OverlayComponent,
    ProfileSettingsComponent,
    ProfileSettingsFormComponent,
    ProfileSettingsOverviewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  providers: [mockBackendProvider, UserService, TransactionsService],
  exports: [LayoutComponent],
})
export class CoreModule {}
