import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendURL } from '../../utils/backendURL';
import { catchError } from 'rxjs/operators';
import { handleError } from './handleError';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public static user: any;
  public static access_token: string;




  constructor(private http: HttpClient) {
  }

  getAccess_token() {
    UserService.access_token = localStorage.getItem('access_token');
    return UserService.access_token;
  }

  getUser() {
    UserService.user = localStorage.getItem('user');
    return UserService.user;
  }

  getUsers() {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${UserService.access_token}`);
    return this.http.get(BackendURL.users, { headers: headers }).pipe(
      catchError(handleError)
    );
  }

  saveUser(user) {
    let body = {
      user: user,
      hr: UserService.user
    };
    let headers = new HttpHeaders().set('Authorization', `Bearer ${UserService.access_token}`).set('Content-type', 'application/json');
    return this.http.post(BackendURL.users, body, { headers: headers }).pipe(
      catchError(handleError)
    );
  }

  login(user) {
    let body = {
      user: user
    };
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post(BackendURL.auth + '/login', body, { headers: headers }).pipe(
      catchError(handleError)
    );
  }

}
