import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { MatDialog } from '@angular/material';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User;
  access_token: string;
  posts: any;
  constructor(private dialog: MatDialog, private router: Router, public userService: UserService, public postService: PostService) {
  }

  ngOnInit() {
    console.log('ngOnInit');
    if (!UserService.access_token) {
      this.user = this.userService.getUser();
      console.log('this.user :', this.user);
      this.access_token = this.userService.getAccess_token();
      this.postService.getNews(this.access_token).subscribe((data: any) => {
        this.posts = data.result;
        console.log('!this.posts this.posts data.result :', this.posts);
      }, (error) => {
        console.log('getNews error :', error);
        this.dialog.open(ErrorComponent, {
          data: {
            message: "Your Session is expired, please login in again"
          }
        });
      });


    } else {
      console.log(' esle UserService.user :', UserService.user);
      console.log(' esle UserService.access_token :', UserService.access_token);
      this.user = UserService.user;
      this.access_token = UserService.access_token;
      this.postService.getNews(this.access_token).subscribe((data: any) => {
        this.posts = data.result;
        console.log('!this.posts this.posts data.result :', this.posts);
      }, (error) => {
        console.log('getNews error :', error);
        this.dialog.open(ErrorComponent, {
          data: {
            message: "Your Session is expired, please login in again"
          }
        });
      });
    }
  }

}
