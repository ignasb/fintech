import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  digitsValidator,
  emailValidator,
  lettersOnlyValidator,
  matchingPasswordsValidator,
  upperCaseValidator,
} from './profile-settings-form.const';

@Component({
  selector: 'app-profile-settings-form',
  templateUrl: './profile-settings-form.component.html',
  styleUrls: ['./profile-settings-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileSettingsFormComponent {
  defaultValidators = [Validators.required, Validators.maxLength(30)];

  profileForm = new FormGroup(
    {
      firstName: new FormControl('', [
        ...this.defaultValidators,
        lettersOnlyValidator(),
      ]),
      lastName: new FormControl('', [
        ...this.defaultValidators,
        lettersOnlyValidator(),
      ]),
      email: new FormControl('', [...this.defaultValidators, emailValidator()]),
      password: new FormControl('', [
        ...this.defaultValidators,
        upperCaseValidator(),
        digitsValidator(),
      ]),
      repeatPassword: new FormControl('', [
        ...this.defaultValidators,
        upperCaseValidator(),
        digitsValidator(),
      ]),
    },
    { validators: matchingPasswordsValidator() }
  );

  public submitForm(): void {
    console.log(JSON.stringify(this.profileForm.value));
    console.log(this.profileForm);
  }
}
