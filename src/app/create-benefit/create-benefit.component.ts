import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-benefit',
  templateUrl: './create-benefit.component.html',
  styleUrls: ['./create-benefit.component.scss']
})
export class CreateBenefitComponent implements OnInit {

  benefitForm: FormGroup;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.benefitForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

  }

  submitBenefit() {
    console.log(this.benefitForm.value);
  }

}
