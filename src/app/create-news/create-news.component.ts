import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {

  newsForm: FormGroup;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.newsForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

  }

  submitNews(){
    console.log(this.newsForm.value);
  }

}
