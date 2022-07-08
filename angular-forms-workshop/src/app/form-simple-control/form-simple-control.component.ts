import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from './../services/error-state-matcher';

@Component({
  selector: 'app-form-simple-control',
  templateUrl: './form-simple-control.component.html',
  styleUrls: ['./form-simple-control.component.css'],
})
export class FormSimpleControlComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  myFirstControl = new UntypedFormControl('my first value', {
    validators: Validators.required,
  });

  constructor() {}

  ngOnInit(): void {}

  setValue() {
    this.myFirstControl.setValue('setValue');
  }

  patchValue() {
    this.myFirstControl.patchValue('patchValue');
  }

  submitted() {
    console.log(this.myFirstControl.value);
  }
}
