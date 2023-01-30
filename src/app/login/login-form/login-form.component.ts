import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/core/models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
  @Output()
  login = new EventEmitter<UserModel.IUserLogin>();

  loginForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      password: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }

  submitLogin(login: UserModel.IUserLogin): void {
    this.login.emit(login);
  }
}
