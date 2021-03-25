import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-form-simple-control',
  templateUrl: './form-simple-control.component.html',
  styleUrls: ['./form-simple-control.component.css'],
})
export class FormSimpleControlComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

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
