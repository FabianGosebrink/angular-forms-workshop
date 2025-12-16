import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from './my-error-state-matcher';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatError, MatFormField, MatInput } from '@angular/material/input';
import { JsonPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-showcase-form-control',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    MatError,
    JsonPipe,
    MatCardActions,
    MatButton
  ],
  templateUrl: './showcase-form-control.html',
  styleUrl: './showcase-form-control.scss',
})
export class ShowcaseFormControl {
  matcher = new MyErrorStateMatcher();

  myFirstControl = new FormControl<string>('my first value', {
    validators: Validators.required,
  });

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
