import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  selector: 'app-form-simple-group',
  templateUrl: './form-simple-group.component.html',
  styleUrls: ['./form-simple-group.component.css'],
})
export class FormSimpleGroupComponent implements OnInit {
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
