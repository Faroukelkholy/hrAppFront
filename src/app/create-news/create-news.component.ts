import { UserService } from './../services/user.service';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {

  newsForm: FormGroup;
  user: User;
  access_token: string;
  constructor(private router: Router, public formBuilder: FormBuilder, public postService: PostService, public userService: UserService) { }


  ngOnInit() {
    console.log('ngOnInit');
    this.newsForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

    if (!UserService.access_token) {
      this.user = this.userService.getUser();
      console.log('this.user :', this.user);
      this.access_token = this.userService.getAccess_token();
    } else {
      this.user = UserService.user;
      this.access_token = UserService.access_token;
    }
  }


  submitNews() {
    console.log(this.newsForm.value);
    this.postService.savePost(this.newsForm.value, 'news', this.user, this.access_token).subscribe((data: any) => {
      console.log('!submitNews savePost:', data);
      if (data.message === 'Success') {
        this.router.navigate(['/app/home']);
      }
    }, (error) => {
      console.log('submitNews error :', error);
    });
  }

}
