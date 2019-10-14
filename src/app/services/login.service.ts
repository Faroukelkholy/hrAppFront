import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loggedIn: boolean;


  constructor() {
   }


  login() {
    this.loggedIn = true;
  }

  getLoggedIn() {
    return this.loggedIn;
  }

}
