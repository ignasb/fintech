import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../models';
import { IUser } from '../../models/user.model';
import {
  digitsValidator,
  EFormFieldType,
  emailValidator,
  lettersOnlyValidator,
  matchingPasswordsValidator,
  passwordValidator,
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

  @Output()
  updateProfile = new EventEmitter<UserModel.IUser>();

  profileForm!: FormGroup;

  EFormField = EFormFieldType;

  ngOnChanges(changes: SimpleChanges): void {
    const { user } = changes;
    if (user.currentValue) {
      this.profileForm = this.getProfileForm(user.currentValue);
    }
  }

  submitForm(formData: UserModel.IUser, isValid: boolean): void {
    if (isValid) {
      const profile = {
        ...formData,
      };

      // @ts-ignore
      delete profile['repeatPassword'];
      this.updateProfile.emit(profile);
    }
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
          passwordValidator(),
          Validators.minLength(8),
        ]),
        repeatPassword: new FormControl(password, [
          ...defaultValidators,
          upperCaseValidator(),
          digitsValidator(),
          passwordValidator(),
          Validators.minLength(8),
        ]),
      },
      { validators: matchingPasswordsValidator() }
    );
  }
}
