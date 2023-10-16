import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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
import { BlockButtonsComponent } from '../block-buttons/block-buttons.component';
import { PokemonNameValidator } from './async-pokemon-validator';
import { RestrictAgeValidator } from './restrict-age.validator';
import { Room } from './room';

interface UserForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  age: FormControl<number>;
  room: FormControl<Room | null>;
  toggle: FormControl<string>;
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
    BlockButtonsComponent,
  ],
  templateUrl: './simple-form-group.component.html',
  styleUrls: ['./simple-form-group.component.css'],
})
export class SimpleFormGroupComponent {
  private readonly formBuilder = inject(FormBuilder);

  private readonly pokemonNameValidator = inject(PokemonNameValidator);

  //myForm: FormGroup<UserForm>;
  myForm: FormGroup<UserForm>;

  rooms: Room[] = [
    { text: 'room 1', value: 'room-1' },
    { text: 'room 2', value: 'room-2' },
    { text: 'room 3', value: 'room-3' },
  ];

  ngOnInit() {
    // this.myForm = new FormGroup<UserForm>({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl(''),
    //   age: new FormControl(0),
    //   // ...
    // });

    this.myForm = this.formBuilder.group<UserForm>(
      {
        firstName: this.formBuilder.control(
          '',
          [],
          [this.pokemonNameValidator.nameAlreadyTaken()]
        ),
        lastName: this.formBuilder.control(''),
        age: this.formBuilder.control(0),
        room: this.formBuilder.control(null),
        toggle: this.formBuilder.control(''),
      },
      {
        validators: [RestrictAgeValidator.restrictAgeValidator(18)],
      }
    );

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
