import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-benefit',
  templateUrl: './create-benefit.component.html',
  styleUrls: ['./create-benefit.component.scss']
})
export class CreateBenefitComponent implements OnInit {

  benefitForm: FormGroup;
  user:User;
  access_token: string;
  constructor(private router: Router, public formBuilder: FormBuilder, public postService:PostService, public userService:UserService) { }


  ngOnInit() {
    this.benefitForm = this.formBuilder.group({
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

  submitBenefit() {
    console.log(this.benefitForm.value);
    this.postService.savePost(this.benefitForm.value, 'benefit', this.user, this.access_token).subscribe((data: any) => {
      console.log('!submitNews savePost:', data);
      if (data.message === 'Success') {
        this.router.navigate(['/app/benefits']);
      }
    }, (error) => {
      console.log('submitNews error :', error);
    });
  }

}
