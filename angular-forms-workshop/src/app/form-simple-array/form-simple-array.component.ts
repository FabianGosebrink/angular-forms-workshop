import { Component } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-simple-array',
  templateUrl: './form-simple-array.component.html',
  styleUrls: ['./form-simple-array.component.css'],
})
export class FormSimpleArrayComponent {
  myFormGroup: UntypedFormGroup;
  formArray: UntypedFormArray;

  constructor(private fb: UntypedFormBuilder) {
    this.formArray = fb.array([new UntypedFormControl('')]);
    this.myFormGroup = fb.group({
      myFormArray: this.formArray,
    });
  }

  addControl() {
    this.formArray.push(new UntypedFormControl(''));
  }

  submitted() {
    console.log(this.myFormGroup.value);
  }
}
