import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog} from  '@angular/material';
import { ErrorComponent } from '../error/error.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myLoginForm: FormGroup;
  constructor(private  dialog:  MatDialog ,private router: Router, public formBuilder: FormBuilder, public loginService: LoginService) { }

  ngOnInit() {
    this.myLoginForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });

  }

  submitLogin() {
    console.log("logiin :",this.myLoginForm.value);
    this.loginService.login();
    this.router.navigate(['/home']);
    // this.dialog.open(ErrorComponent,{ data: {
    //   message:  "Your login information are incorrect!"
    //   }});
  }

}
