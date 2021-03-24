import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-simple-control',
  templateUrl: './form-simple-control.component.html',
  styleUrls: ['./form-simple-control.component.css'],
})
export class FormSimpleControlComponent implements OnInit {
  myFirstControl = new FormControl('my first value', {
    validators: Validators.required,
  });

  constructor() {}

  ngOnInit(): void {}

  setValue() {
    this.myFirstControl.setValue('setValue');
  }

  patchValue() {
    this.myFirstControl.setValue('patchValue');
  }

  submitted() {
    console.log(this.myFirstControl.value);
  }
}
