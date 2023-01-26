import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BadgeComponent } from './badge/badge.component';
import { ProfileComponent } from './profile/profile.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    BadgeComponent,
    ProfileComponent,
    InputComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, MatIconModule, FormsModule],
  exports: [
    FormsModule,
    MatIconModule,
    BadgeComponent,
    ProfileComponent,
    InputComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
