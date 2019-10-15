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

  public static user: User;
  public static access_token: string;




  constructor(private http: HttpClient) {
   }

  login(user) {
    let body = {
      user: user
    };
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post(BackendURL.auth +'/login', body, { headers: headers }).pipe(
      catchError(handleError)
    );
  }

}
