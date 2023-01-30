import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../models';
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
export class ProfileSettingsFormComponent implements OnChanges {
  @Input()
  user!: UserModel.IUser | null;

  profileForm!: FormGroup;

  ngOnChanges(changes: SimpleChanges): void {
    const { user } = changes;
    if (user.currentValue) {
      this.profileForm = this.getProfileForm(user.currentValue);
    }
  }

  submitForm(): void {
    console.log(JSON.stringify(this.profileForm.value));
    console.log(this.profileForm);
  }

  getProfileForm(user: UserModel.IUser): FormGroup {
    const defaultValidators = [Validators.required, Validators.maxLength(30)];
    const { firstName, lastName, email, password } = user;

    return new FormGroup(
      {
        firstName: new FormControl(firstName, [
          ...defaultValidators,
          lettersOnlyValidator(),
        ]),
        lastName: new FormControl(lastName, [
          ...defaultValidators,
          lettersOnlyValidator(),
        ]),
        email: new FormControl(email, [...defaultValidators, emailValidator()]),
        password: new FormControl(password, [
          ...defaultValidators,
          upperCaseValidator(),
          digitsValidator(),
        ]),
        repeatPassword: new FormControl(password, [
          ...defaultValidators,
          upperCaseValidator(),
          digitsValidator(),
        ]),
      },
      { validators: matchingPasswordsValidator() }
    );
  }
}
