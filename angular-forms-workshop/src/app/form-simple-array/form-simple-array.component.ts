import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-simple-array',
  templateUrl: './form-simple-array.component.html',
  styleUrls: ['./form-simple-array.component.css'],
})
export class FormSimpleArrayComponent {
  myFormGroup: FormGroup;
  formArray: FormArray;

  constructor(private fb: FormBuilder) {
    this.formArray = fb.array([new FormControl('')]);
    this.myFormGroup = fb.group({
      myFormArray: this.formArray,
    });
  }

  addControl() {
    this.formArray.push(new FormControl(''));
  }

  submitted() {
    console.log(this.myFormGroup.value);
  }
}
