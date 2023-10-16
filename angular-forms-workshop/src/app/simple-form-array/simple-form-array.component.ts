import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-simple-form-array',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './simple-form-array.component.html',
  styleUrls: ['./simple-form-array.component.css'],
})
export class SimpleFormArrayComponent {
  private readonly fb = inject(FormBuilder);

  formArray = this.fb.array([new FormControl<string>('')]);

  myFormGroup = this.fb.group({
    myFormArray: this.formArray,
  });

  // ngOnInit() {
  //   // this.formArray = fb.array([new FormControl<string>('')]);
  //   // this.myFormGroup = fb.group({
  //   //   myFormArray: this.formArray,
  //   // });
  // }

  addControl() {
    this.formArray.push(new FormControl<string>(''));
  }

  submitted() {
    console.log(this.myFormGroup.value);
  }
}
