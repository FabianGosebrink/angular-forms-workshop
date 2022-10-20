import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-simple-array',
  templateUrl: './form-simple-array.component.html',
  styleUrls: ['./form-simple-array.component.css'],
})
export class FormSimpleArrayComponent {
  formArray = this.fb.array([new FormControl<string>('')]);

  myFormGroup = this.fb.group({
    myFormArray: this.formArray,
  });

  constructor(private fb: FormBuilder) {
    // this.formArray = fb.array([new FormControl<string>('')]);
    // this.myFormGroup = fb.group({
    //   myFormArray: this.formArray,
    // });
  }

  addControl() {
    this.formArray.push(new FormControl<string>(''));
  }

  submitted() {
    console.log(this.myFormGroup.value);
  }
}
