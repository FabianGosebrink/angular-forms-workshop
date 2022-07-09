import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PokemonNameValidator } from './async-pokemon-validator';
import { Room } from './room';

interface UserForm
  extends FormGroup<{
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    age: FormControl<number>;
  }> {}

@Component({
  selector: 'app-form-simple-group',
  templateUrl: './form-simple-group.component.html',
  styleUrls: ['./form-simple-group.component.css'],
})
export class FormSimpleGroupComponent implements OnInit {
  title = 'forms-cross-field-validation';
  myForm: UserForm;

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

    this.myForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      age: 0,
    });
  }

  onSubmit() {
    console.log(this.myForm.getRawValue());
    console.log(this.myForm.value);
  }
}
