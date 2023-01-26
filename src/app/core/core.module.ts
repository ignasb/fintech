import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';
import { LinkComponent } from './sidebar/link/link.component';
import { SharedModule } from '../shared/shared.module';
import { SettingsComponent } from './sidebar/settings/settings.component';

@NgModule({
  declarations: [
    SidebarComponent,
    MainComponent,
    LayoutComponent,
    LinkComponent,
    SettingsComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [LayoutComponent],
})
export class CoreModule {}
