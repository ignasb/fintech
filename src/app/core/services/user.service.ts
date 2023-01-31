import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../../shared/models';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  login$(credentials: UserModel.IUserLogin): Observable<UserModel.IUser> {
    return this.http.post<UserModel.IUser>('/login', credentials);
  }

  getProfile$(): Observable<UserModel.IUser> {
    return this.http.get<UserModel.IUser>('/profile');
  }

  updateProfile$(user: UserModel.IUser): Observable<UserModel.IUser> {
    return this.http.put<UserModel.IUser>('/profile', user);
  }
}
