import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MyErrorStateMatcher } from './../services/error-state-matcher';

@Component({
  selector: 'app-simple-form-control',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './simple-form-control.component.html',
  styleUrls: ['./simple-form-control.component.css'],
})
export class SimpleFormControlComponent {
  matcher = new MyErrorStateMatcher();

  myFirstControl = new FormControl<string>('my first value', {
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
