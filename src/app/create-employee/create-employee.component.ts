import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  employeeform: FormGroup;
  newsForm: FormGroup;
  user: User;
  access_token: string;
  constructor(private router: Router, public formBuilder: FormBuilder, public userService: UserService) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.employeeform = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.email],
      mobile: ['', Validators.compose([Validators.minLength(11), Validators.required])],
      title: ['', Validators.required],
      job: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['male', Validators.required],
    });
  }


  submitEmployee() {
    console.log(this.employeeform.value);
    this.userService.saveUser(this.employeeform.value).subscribe((data: any) => {
      console.log('!submitEmployee saveUser:', data);
      if (data.message === 'Success') {
        this.router.navigate(['/app/employees']);
      }
    }, (error) => {
      console.log('submitEmployee error :', error);
    });
  }

}

