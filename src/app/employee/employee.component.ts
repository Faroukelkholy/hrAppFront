import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  user: User;
  access_token: string;
  users: User[];
  dataSource;
  // displayedColumns: string[] = ['position', 'name', 'email', 'mobile', 'title', 'job', 'dob', 'address'];
  displayedColumns: string[] = [ 'name', 'email', 'mobile', 'title', 'job', 'dob', 'address'];
  constructor(private dialog: MatDialog, private router: Router, public userService: UserService) {
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data.result;
      this.dataSource = this.users;
      // this.displayedColumns = Object.keys(this.users[0]);
      console.log('!this.users this.users data.result :', this.users);
    }, (error) => {
      console.log('getUsers error :', error);
      this.dialog.open(ErrorComponent, {
        data: {
          message: "Your Session is expired, please login in again"
        }
      });
    });
  }

}

