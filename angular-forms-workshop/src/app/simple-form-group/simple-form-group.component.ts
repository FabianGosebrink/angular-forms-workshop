import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PokemonNameValidator } from './async-pokemon-validator';
import { Room } from './room';

interface UserForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  age: FormControl<number>;
  room: FormControl<Room | null>;
}

interface User {
  firstName: string;
  lastName: string;
  age: number;
  room: Room | null;
}

@Component({
  selector: 'app-simple-form-group',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './simple-form-group.component.html',
  styleUrls: ['./simple-form-group.component.css'],
})
export class SimpleFormGroupComponent {
  //myForm: FormGroup<UserForm>;
  myForm: FormGroup<UserForm>;

  rooms: Room[] = [
    { text: 'room 1', value: 'room-1' },
    { text: 'room 2', value: 'room-2' },
    { text: 'room 3', value: 'room-3' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private pokemonNameValidator: PokemonNameValidator
  ) {}

  ngOnInit() {
    // this.myForm = new FormGroup<UserForm>({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl(''),
    //   age: new FormControl(0),
    //   // ...
    // });

    this.myForm = this.formBuilder.group<UserForm>({
      firstName: this.formBuilder.control(''),
      lastName: this.formBuilder.control(''),
      age: this.formBuilder.control(0),
      room: this.formBuilder.control(null),
    });

    // this.myForm = this.formBuilder.group<User>({
    //   firstName: '',
    //   lastName: '',
    //   age: 0,
    //   room: null,
    // });
  }

  onSubmit() {
    console.log(this.myForm.getRawValue());
    console.log(this.myForm.value);
  }
}
