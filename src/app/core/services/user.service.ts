import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getDetails$(): Observable<IUser> {
    return this.http.get<IUser>('/profile');
  }
}
