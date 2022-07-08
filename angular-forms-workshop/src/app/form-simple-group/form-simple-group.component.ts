import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AgeValidator } from './age.validator';
import { PokemonNameValidator } from './async-pokemon-validator';
import { RestrictAgeValidator } from './restrict-age.validator';
import { Room } from './room';

@Component({
  selector: 'app-form-simple-group',
  templateUrl: './form-simple-group.component.html',
  styleUrls: ['./form-simple-group.component.css'],
})
export class FormSimpleGroupComponent implements OnInit {
  title = 'forms-cross-field-validation';
  myForm: UntypedFormGroup;

  rooms: Room[] = [
    { text: 'room 1', value: 'room-1' },
    { text: 'room 2', value: 'room-2' },
    { text: 'room 3', value: 'room-3' },
  ];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private pokemonNameValidator: PokemonNameValidator
  ) {}

  ngOnInit() {
    // this.myForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl(''),
    //   // ...
    // });

    this.myForm = this.formBuilder.group(
      {
        firstName: [
          '',
          Validators.required,
          this.pokemonNameValidator.nameAlreadyTaken(),
        ],
        lastName: ['', Validators.required],
        age: ['', [Validators.required, AgeValidator.ageValidator]],
        room: [null, Validators.required],
        toggle: [''],
      },
      {
        validators: [RestrictAgeValidator.restrictAgeValidator(18)],
      }
    );
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
