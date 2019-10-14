import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  employeeform: FormGroup;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.employeeform = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

  }

}
